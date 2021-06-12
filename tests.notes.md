## Arquivo apenas para algumas anotações sobre testes unitários

#### nativeElement

O fixture do Angular fornece os elementos dos componentes diretamente através do `fixture.nativeElement`
    - `const randomElement: HTMLElement = fixture.nativeElement`

Uma outra maneira de acessar os elementos seria:
    - `const bannerDe: DebugElement = fixture.debugElement;`
    - `const bannerEl: HTMLElement = bannerDe.nativeElement;`

As propriedades do `nativeElement` dependem do ambiente de execução. Essas últimas maneiras de acessar os elementos podemos estar executando  em uma plataforma sem navegador que não tenha um DOM ou cuja emulação de DOM não suporta a API HTMLElement completa.

---

### Bind data

`createComponent()` não vincula dados. Então logo depois de criar um componente, acessar um elemento no template e verificar se o mesmo possui tal informação não irá funcionar como esperado. __Vinculação de dados__ só ocorre depois que o Angular executa __change detection__, chamando o `fixture.detectChanges()`.

    it('should display a different test title', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        expect(h1.textContent).toContain('Test Title');
    });

As vezes é necessário que o ambiente de testes detecte por mudanças automaticamente. É possível com `ComponentFixtureAutoDetect` provider.

    TestBed.configureTestingModule({
        declarations: [ BannerComponent ],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
    });

Um exemplo como a detecção automatica de alterações funciona:

    it('should display original title', () => {
        // Hooray! No `fixture.detectChanges()` needed
        expect(h1.textContent).toContain(comp.title);
    });

    it('should still see original title after comp.title change', () => {
        const oldTitle = comp.title;
        comp.title = 'Test Title';
        // Displayed title is old because Angular didn't hear the change :(
        expect(h1.textContent).toContain(oldTitle);
    });

    it('should display updated title after detectChanges', () => {
        comp.title = 'Test Title';
        fixture.detectChanges(); // detect changes explicitly
        expect(h1.textContent).toContain(comp.title);
    });

No primeiro teste funcionou de boa! No entanto, no segundo não funcionou, sendo necessário chamar o `fixture.detectChanges()` manualmente. Isso ocorre porque o `ComponentFixtureAutoDetect` responde à atividades asyncronas como _promises_, _timers_, _DOM events_... Logo caso seja feita uma alteração syncrona, é necessário detectar as alterações manualmente. Não há mal nenhum chamar o `detectChanges()` manualmente com mais frequência do que o estritamente necessário.

---

#### Dependências externas

Quando o componente depende de um serviço externo é necessário adiciona-los ao providers logo ao configurar o componente no arquivo de testes.

    TestBed.configureTestingModule({
        declarations: [ WelcomeComponent ],
        // providers: [ UserService ],  // NO! Don't provide the real service!
                                        // Provide a test-double instead
        providers: [ { provide: UserService, useValue: userServiceStub } ],
    });

OBS: Não adicionar o arquivo de testes original!!! O propósito é testar o componente em si, e não os serviços, que podem ser problemáticos.

---

#### Jest nos projetos Angular

https://dev.to/brunoromeiro/angular-com-jest-5enn

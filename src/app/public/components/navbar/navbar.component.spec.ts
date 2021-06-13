import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let togglerDe: DebugElement;
  let togglerEl: HTMLElement;
  let navLinks: NodeListOf<Element>;
  let numberOfNavLinks: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    // Get toggler button element
    togglerDe = fixture.debugElement.query(By.css('.navbar-toggler'));
    togglerEl = togglerDe.nativeElement;

    // Get all navlinks of the component
    navLinks = (fixture.nativeElement as HTMLElement).querySelectorAll('.custom-nav-link');
    numberOfNavLinks = navLinks.length;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should toggle the 'collapse menu' on click in navbar toggle menu`, () => {
    const apiSpy = jest.spyOn(component, 'toggleMenu');
    togglerEl.click();

    expect(component.toggleMenu).toHaveBeenCalledTimes(1);
    expect(component.toggleMenu()).toBe(true);
  });

  it(`should hidden 'collapse menu' on click in any navbar link`, () => {
    jest.spyOn(component, 'hiddenMenu');
    navLinks.forEach((link) => link.dispatchEvent(new Event('click')));

    expect(component.hiddenMenu).toHaveBeenCalledTimes(numberOfNavLinks);
    expect(component.hiddenMenu()).toBe(true);
  });

  it(`should not toggle the 'collapse menu' when @ViewChild is undefined`, () => {
    jest.spyOn(component, 'toggleMenu');

    component.menuCollapseRef = undefined;
    component.ngAfterViewInit();

    togglerEl.click();

    expect(component.toggleMenu).toHaveBeenCalledTimes(1);
    expect(component.toggleMenu()).toBe(false);
  });

  it(`should not hidden the 'collapse menu' when @ViewChild is undefined`, () => {
    jest.spyOn(component, 'hiddenMenu');

    component.menuCollapseRef = undefined;
    component.ngAfterViewInit();

    navLinks.forEach((link) => link.dispatchEvent(new Event('click')));

    expect(component.hiddenMenu).toHaveBeenCalledTimes(numberOfNavLinks);
    expect(component.hiddenMenu()).toBe(false);
  })
});

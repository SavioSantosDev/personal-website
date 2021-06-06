import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCertificatesComponent } from './modal-certificates.component';

describe('ModalCertificatesComponent', () => {
  let component: ModalCertificatesComponent;
  let fixture: ComponentFixture<ModalCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

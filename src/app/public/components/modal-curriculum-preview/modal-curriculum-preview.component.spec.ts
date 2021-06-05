import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCurriculumPreviewComponent } from './modal-curriculum-preview.component';

describe('ModalCurriculumPreviewComponent', () => {
  let component: ModalCurriculumPreviewComponent;
  let fixture: ComponentFixture<ModalCurriculumPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCurriculumPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCurriculumPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

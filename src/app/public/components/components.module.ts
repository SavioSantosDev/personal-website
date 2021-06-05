import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalCurriculumPreviewComponent } from './modal-curriculum-preview/modal-curriculum-preview.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalCurriculumPreviewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalCurriculumPreviewComponent,
  ]
})
export class ComponentsModule { }

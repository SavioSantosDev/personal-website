import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalCurriculumPreviewComponent } from './modal-curriculum-preview/modal-curriculum-preview.component';
import { ModalCertificatesComponent } from './modal-certificates/modal-certificates.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalCurriculumPreviewComponent,
    ModalCertificatesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalCurriculumPreviewComponent,
    ModalCertificatesComponent,
  ]
})
export class ComponentsModule { }

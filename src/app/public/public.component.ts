import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalCertificatesComponent } from './components/modal-certificates/modal-certificates.component';

import { ModalCurriculumPreviewComponent } from './components/modal-curriculum-preview/modal-curriculum-preview.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  @ViewChild(ModalCurriculumPreviewComponent) cvModal?: ModalCurriculumPreviewComponent;
  @ViewChild(ModalCertificatesComponent) certificatesModal?: ModalCertificatesComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openCVPreview(): void {
    this.cvModal?.showModal();
  }

  openCertificates(): void {
    this.certificatesModal?.showModal();
  }
}

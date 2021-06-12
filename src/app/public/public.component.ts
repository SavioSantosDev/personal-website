import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalCertificatesComponent } from './components/modal-certificates/modal-certificates.component';

import { ModalCurriculumPreviewComponent } from './components/modal-curriculum-preview/modal-curriculum-preview.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  @ViewChild(ModalCurriculumPreviewComponent)
  private readonly cvModal?: ModalCurriculumPreviewComponent;

  @ViewChild(ModalCertificatesComponent)
  private readonly certificatesModal?: ModalCertificatesComponent;

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

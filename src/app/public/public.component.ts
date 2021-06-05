import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalCurriculumPreviewComponent } from './components/modal-curriculum-preview/modal-curriculum-preview.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  @ViewChild(ModalCurriculumPreviewComponent) cvModal?: ModalCurriculumPreviewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openCVPreview(): void {
    this.cvModal?.showModal();
  }
}

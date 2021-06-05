import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Bootstrap from 'bootstrap';

@Component({
  selector: 'app-modal-curriculum-preview',
  templateUrl: './modal-curriculum-preview.component.html',
  styleUrls: ['./modal-curriculum-preview.component.scss']
})
export class ModalCurriculumPreviewComponent implements AfterViewInit {

  private modal?: Bootstrap.Modal;
  private readonly _pdfSrc = "http://localhost:4200/assets/cv.pdf";

  @ViewChild('cvModal') private modalRef?: ElementRef;

  constructor() { }

  private createModal(): void {
    this.modal = new Bootstrap.Modal(this.modalRef?.nativeElement, {
      backdrop: false
    });
  }

  get pdfSrc() { return this._pdfSrc; }

  ngAfterViewInit(): void {
    this.createModal();
  }

  showModal() {
    this.modal?.show();
  }
}

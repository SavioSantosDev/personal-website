import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import * as Bootstrap from 'bootstrap';

import { scaleIn, scaleOut } from 'src/app/shared/carousel.animations';

@Component({
  selector: 'app-modal-certificates',
  templateUrl: './modal-certificates.component.html',
  styleUrls: ['./modal-certificates.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn)]),
      transition('* => void', [useAnimation(scaleOut)])
    ])
  ]
})
export class ModalCertificatesComponent implements AfterViewInit {

  private modal?: Bootstrap.Modal;
  @ViewChild('certificatesModal') private modalRef?: ElementRef;

  certificates = [
    {
      imagePath: 'assets/certificates/angular.png',
      url: 'https://loiane.training/certificado/84khyBORMDdcoTqNlkQR',
      name: 'Certificado Angular - Loiane Groner'
    },
    {
      imagePath: 'assets/certificates/uidesign.png',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2700caa0-67bc-4d90-8689-9bf66e94a91c.jpg',
      name: 'Certificado UI Design - Udemy'
    },
    {
      imagePath: 'assets/certificates/figma.png',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-402fb66a-0a4e-4d67-bb46-7cddf94c65aa.jpg',
      name: 'Certificado Figma - Udemy'
    },
    {
      imagePath: 'assets/certificates/git.png',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8bd49eb0-7576-4632-8292-40cef72196a4.jpg',
      name: 'Certificado Git e GitHub - Udemy'
    },
  ];
  currentSlide = 0;

  constructor() { }

  private createModal(): void {
    this.modal = new Bootstrap.Modal(this.modalRef?.nativeElement, {
      backdrop: false
    });
  }

  ngAfterViewInit(): void {
    this.createModal();
  }

  showModal() {
    this.modal?.show();
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.certificates.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.certificates.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Output() onOpenCVPreview = new EventEmitter();

  constructor() { }

  openCVPreview(): void {
    this.onOpenCVPreview.emit();
  }

}

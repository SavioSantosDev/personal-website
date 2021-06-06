import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import * as Bootstrap from 'bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  @ViewChildren('skillIcon') skillIcons?: QueryList<ElementRef>;
  icons = [
    { class: 'size-1', id: 'css', src: 'assets/icons/icons.svg#css3', alt: 'CSS 3' },
    { class: 'size-1', id: 'html', src: 'assets/icons/icons.svg#html5', alt: 'HTML 5' },
    { class: 'size-1', id: 'figma', src: 'assets/icons/icons.svg#figma', alt: 'Figma' },
    { class: 'size-2', id: 'sass', src: 'assets/icons/icons.svg#sass', alt: 'Sass' },
    { class: 'size-2', id: 'bootstrap', src: 'assets/icons/icons.svg#bootstrap', alt: 'Bootstrap' },
    { class: 'size-3', id: 'angular', src: 'assets/icons/icons.svg#angular', alt: 'Angular' },
    { class: 'size-3', id: 'node', src: 'assets/icons/icons.svg#nodejs', alt: 'Node.js' },
    { class: 'size-3', id: 'vscode', src: 'assets/icons/icons.svg#vscode', alt: 'VS Code' },
    { class: 'size-3', id: 'typescript', src: 'assets/icons/icons.svg#typescript', alt: 'TypeScript' },
    { class: 'size-4', id: 'javascript', src: 'assets/icons/icons.svg#javascript', alt: 'JavaScript' },
    { class: 'size-4', id: 'git', src: 'assets/icons/icons.svg#git', alt: 'Git' },
    { class: 'size-4', id: 'github', src: 'assets/icons/icons.svg#github', alt: 'GitHub' },
    { class: 'size-4', id: 'evernote', src: 'assets/icons/icons.svg#evernote', alt: 'Evernote' },
    { class: 'size-5', id: 'illustrator', src: 'assets/icons/icons.svg#illustrator', alt: 'Illustrator' },
    { class: 'size-5', id: 'mongodb', src: 'assets/icons/icons.svg#mongodb', alt: 'MongoDB' },
    { class: 'size-5', id: 'photoshop', src: 'assets/icons/icons.svg#photoshop', alt: 'Photoshop' },
  ]

  constructor() { }

  private initializeTooltips(): void {
    this.skillIcons?.forEach((el) => {
      return new Bootstrap.Tooltip(el.nativeElement);
    })
  }

  ngAfterViewInit(): void {
    this.initializeTooltips();
  }

}

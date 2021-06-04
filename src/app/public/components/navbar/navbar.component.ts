import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  navbarCollapse = true;
  @ViewChild('menuCollapse') private menuCollapsRef?: ElementRef;
  private menuCollapse?: Bootstrap.Collapse;

  constructor() {
  }

  ngAfterViewInit() {
    this.menuCollapse = new Bootstrap.Collapse(this.menuCollapsRef?.nativeElement, {
      toggle: false,
    });
  }

  toggleMenu() {
    this.menuCollapse?.toggle();
  }

  hiddenMenu() {
    this.menuCollapse?.hide();
  }

}

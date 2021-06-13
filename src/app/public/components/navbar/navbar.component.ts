import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('menuCollapse') menuCollapseRef?: ElementRef;
  private menuCollapse?: Bootstrap.Collapse;

  constructor() {
  }

  private initializeMenuCollapse(): void {
    if (this.menuCollapseRef) {
      this.menuCollapse = new Bootstrap.Collapse(this.menuCollapseRef.nativeElement, {
        toggle: false,
      });
      return;
    }
    this.menuCollapse = undefined;
  }

  ngAfterViewInit() {
    this.initializeMenuCollapse();
  }

  toggleMenu(): boolean {
    if (this.menuCollapse) {
      this.menuCollapse.toggle();
      return true;
    }
    return false;
  }

  hiddenMenu(): boolean {
    if (this.menuCollapse) {
      this.menuCollapse.hide();
      return true;
    }
    return false;
  }

}

import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  @Input() appName: string;
  @Input() infoAnimation: string;
  @Input() infoText: string;
  @Input() isSticky: boolean;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ifSticky() {
    var main = document.querySelector("#main-container");
    if (!this.isSticky) {
      this.renderer.addClass(main, "menu-open");
      this.isSticky = !this.isSticky;
    } else {
      this.renderer.removeClass(main, "menu-open");
      this.isSticky = !this.isSticky;
    }
  }
}

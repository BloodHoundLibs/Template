import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  layoutConfig = {
    theme: "terg",
    topbar: {
      appName: "Zamówienia Niehandlowe",
      infoAnimation: "enabled",
      infoText: "Aplikacja zostanie zatrzymana o godzinie 10:00"
    },
    navigation: {
      position: "vertical",
      sticky: true
    }
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('#main-container'), this.layoutConfig.theme);
    this.renderer.addClass(document.querySelector('body'), this.layoutConfig.theme);
  }

  changeTheme(color: string) {
    this.renderer.removeClass(document.querySelector('#main-container'), this.layoutConfig.theme);
    this.renderer.addClass(document.querySelector('#main-container'), color);
    this.renderer.removeClass(document.querySelector('body'), this.layoutConfig.theme);
    this.renderer.addClass(document.querySelector('body'), color);
    this.layoutConfig.theme = color;
  }

}

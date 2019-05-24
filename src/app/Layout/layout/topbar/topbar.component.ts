import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  @Input() appName: string;
  @Input() infoAnimation: string;
  @Input() textInfo: string;
  constructor() { }

  ngOnInit() {
  }

}

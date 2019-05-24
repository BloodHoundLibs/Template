import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  @Input() positionAxis: string;
  constructor() { }

  ngOnInit() {
  }

}

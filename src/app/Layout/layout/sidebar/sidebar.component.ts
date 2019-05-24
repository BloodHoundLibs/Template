import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { MenuItems } from 'src/app/shared/menu.items';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() positionAxis: string;
  constructor(public menuItems: MenuItems) { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MenuItems } from 'src/app/shared/menu.items';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() positionAxis: string;
  @Input() sticky: boolean = true;
  arrow: string = "keyboard_arrow_down";
  constructor(public menuItems: MenuItems) { }

  ngOnInit() {
  }

  changeArrow(event) {
    if (event.currentTarget.children[2].textContent == "keyboard_arrow_down") {
      event.currentTarget.children[2].textContent = "keyboard_arrow_up";
    } else {
      event.currentTarget.children[2].textContent = "keyboard_arrow_down";
    }
  }
}

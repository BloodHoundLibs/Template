import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[sidebar]',
})
export class SidebarDirective {
    isSideClosed: boolean = false;
    constructor(private renderer: Renderer2) { }

    @HostListener("click") showSidebar() {
        var sidebar = document.querySelector('.sidebar-container');
        if (this.isSideClosed) {
            this.renderer.addClass(sidebar, "close-sidebar");
        } else {
            this.renderer.removeClass(sidebar, "close-sidebar");
        }
        this.isSideClosed = !this.isSideClosed;
    }
}
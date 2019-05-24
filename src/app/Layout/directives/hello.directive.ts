import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[hello]',
})
export class HelloDirective {
    isHelloClosed: boolean = true;
    constructor(private renderer: Renderer2) { }

    @HostListener("click") showSidebar() {
        var hello = document.querySelector('.hello-container');
        if (this.isHelloClosed) {
            this.renderer.addClass(hello, "visible");
        } else {
            this.renderer.removeClass(hello, "visible");
        }
        this.isHelloClosed = !this.isHelloClosed;
    }
}
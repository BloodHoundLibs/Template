import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[activation]',
})
export class ActivationDirective {
    @Input() activator: string;
    @Input() isActive: boolean = false;
    @Input() isInside: boolean = false;
    constructor(private renderer: Renderer2, private element: ElementRef) { }

    @HostListener("click") activate() {
        var element;
        if (this.isInside) {
            element = this.element.nativeElement.querySelector(this.activator);
        } else {
            element = document.querySelector(this.activator);
        }
        if (this.isActive) {
            this.renderer.removeClass(element, "active");
        } else {
            this.renderer.addClass(element, "active");
        }
        this.isActive = !this.isActive;
    }
}
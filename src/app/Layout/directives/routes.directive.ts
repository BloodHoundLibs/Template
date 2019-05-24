import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[routes]',
})
export class RoutesDirective {
    constructor(
        private renderer: Renderer2,
        private elemenet: ElementRef) { }

    @HostListener("click") activatedRoute() {
        var itemList = document.querySelectorAll(".sidebar-list-item");
        for (var i = 0; i < itemList.length; i++) {
            var activeItem = itemList.item(i).classList.contains("is-active");
            if (!activeItem) {
                this.renderer.addClass(this.elemenet.nativeElement, "is-active");
            } else if (this.elemenet.nativeElement.classList.contains("home-routelink")) {
                this.renderer.removeClass(itemList.item(i), "is-active");
            } else {
                this.renderer.removeClass(itemList.item(i), "is-active");
                this.renderer.addClass(this.elemenet.nativeElement, "is-active");
            }
        };
    }
}
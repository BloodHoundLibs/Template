import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[routes]',
})
export class RoutesDirective {
    constructor(
        private renderer: Renderer2,
        private elemenet: ElementRef) { }

    @HostListener("click") activatedRoute() {
        var isActive = this.checkIfActive();
        if (isActive) {
            this.removeActiveRoute();
            this.activateRoute(this.elemenet.nativeElement);
            this.subActive();
        } else {
            this.activateRoute(this.elemenet.nativeElement);
            this.subActive();
        }
    }

    checkIfSub(el) {
        if (el.classList.contains("sub-sidebar-list-item")) {
            return true;
        } else {
            return false;
        }
    }

    activateRoute(el) {
        this.renderer.addClass(el, "activeRoute");
    }

    removeActiveRoute() {
        var activeList = document.querySelectorAll(".activeRoute");
        activeList.forEach(item => {
            this.renderer.removeClass(item, "activeRoute");
        });
    }

    setSubHeaderToActive() {
        this.renderer.addClass(this.elemenet.nativeElement.parentElement.parentElement.parentElement, "activeRoute");
    }

    checkIfActive() {
        if (document.querySelector(".activeRoute") != null) {
            return true;
        } else {
            return false;
        }
    }

    subActive() {
        var isSub = this.checkIfSub(this.elemenet.nativeElement);
        if (isSub) {
            this.setSubHeaderToActive();
        }
    }
}
import { Directive, ElementRef, HostListener } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Directive({
    selector: '[colors]',
})
export class ColorsDirective {
    isColorClosed: boolean = true;
    constructor(private layout: LayoutComponent, private element: ElementRef) { }

    @HostListener("click") showSidebar() {
        this.layout.changeTheme(this.element.nativeElement.id);
    }
}
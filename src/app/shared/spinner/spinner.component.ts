import {
    Component,
    Input,
    OnDestroy,
    Inject,
    ViewEncapsulation
} from '@angular/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';


@Component({
    selector: 'spinner',
    template: `<div class="spinner"><div [class]="isVisible$|async"><div class="preloader" [ngStyle]="{'background-color': backgroundColor}">
    <mat-spinner mode="indeterminate"></mat-spinner>
    </div>  
</div></div>`,
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent {
    isVisible$: Observable<boolean>;
    @Input() public backgroundColor = 'rgba(0, 0, 0, .5)';

    constructor(
        spinnerService: SpinnerService
    ) {
        this.isVisible$ = spinnerService.isSpinnerVisible$;
    }

}

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
const CLOSE_TEXT: string = "Zamknij";

@Injectable({
    providedIn: "root"
})
export class SpinnerService {
    private spinnerVisibleSubj$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isSpinnerVisible$: Observable<boolean>;

    constructor(
        private router: Router
    ) {
        this.isSpinnerVisible$ = this.spinnerVisibleSubj$.asObservable();
        this.router.events.subscribe(
            event => {
                if (event instanceof NavigationStart) {
                    this.ShowSpinner();
                } else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError
                ) {
                    this.HideSpinner();
                }
            },
            () => {
                this.HideSpinner();
            }
        );
    }

    public ShowSpinner() {
        console.log("Show");
        this.spinnerVisibleSubj$.next(true);
    }
    public HideSpinner() {
        console.log("Hide");
        this.spinnerVisibleSubj$.next(false);
    }
}

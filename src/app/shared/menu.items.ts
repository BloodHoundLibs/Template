import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    routerLink?: string[],
}

const MENUITEMS = [
    {
        state: 'start',
        routerLink: ['/', 'test', 'main'],
        name: 'Start',
        type: 'routerLink',
        icon: 'dashboard'
    },
    {
        state: 'start',
        routerLink: ['/', 'test', 'mainn'],
        name: 'Start',
        type: 'routerLink',
        icon: 'dashboard'
    }
]

@Injectable()
export class MenuItems {
    getMenuItem(): Observable<Menu[]> {
        return of(MENUITEMS);
    }
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    icon?: string;
}
export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    routerLink?: string[],
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'test',
        routerLink: ['/', 'test', 'main'],
        name: 'Start',
        type: 'routerLink',
        icon: 'dashboard'
    },
    {
        state: 'test',
        routerLink: ['/', 'test', 'mainn'],
        name: 'Start2',
        type: 'routerLink',
        icon: 'dashboard'
    },
    {
        state: 'test',
        name: 'Start3',
        type: 'sub',
        icon: 'dashboard',
        children: [
            {
                name: "sub",
                state: "main",
                icon: 'dashboard'
            },
            {
                name: "sub2",
                state: "mainn",
                icon: 'dashboard'
            },
            {
                name: "sub2",
                state: "mainn",
                icon: 'dashboard'
            }

        ]
    },
    {
        state: 'test',
        routerLink: ['/', 'test', 'mainn'],
        name: 'Start2',
        type: 'routerLink',
        icon: 'dashboard'
    },
    {
        state: 'test',
        name: 'Start3',
        type: 'sub',
        icon: 'dashboard',
        children: [
            {
                name: "sub",
                state: "main",
                icon: 'dashboard'
            },
            {
                name: "sub2",
                state: "mainn",
                icon: 'dashboard'
            },
            {
                name: "sub2",
                state: "mainn",
                icon: 'dashboard'
            }

        ]
    }
]

@Injectable()
export class MenuItems {
    getMenuItem(): Observable<Menu[]> {
        return of(MENUITEMS);
    }
}
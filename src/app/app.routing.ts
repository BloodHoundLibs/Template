import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { TestModule } from './Main/test/test.module';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: <any>LayoutComponent,
    children: [
      {
        path: 'test',
        loadChildren: () => TestModule
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

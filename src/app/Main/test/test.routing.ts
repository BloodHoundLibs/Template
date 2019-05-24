import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestsComponent } from './testss/test.component';
const TEST_ROUTES: Routes = [
  {
    path: 'main',
    component: TestComponent
  },
  {
    path: 'mainn',
    component: TestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TEST_ROUTES)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

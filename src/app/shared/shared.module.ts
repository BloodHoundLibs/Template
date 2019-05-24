import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItems } from './menu.items';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [MenuItems]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test.routing';
import { TestsComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog } from './testss/test.component';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatCardModule, MatListModule, MatExpansionModule, MatGridListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonToggleModule, MatBadgeModule, MatAutocompleteModule, MatChipsModule, MatIconModule, MatBottomSheetModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatTableModule, MatSortModule, MatRippleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestsComponent,TestComponent,BottomSheetOverviewExampleSheet,DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    TestRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatRippleModule
  ],
  entryComponents: [BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog]
})
export class TestModule { }

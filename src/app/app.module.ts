import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { TopbarComponent } from './Layout/layout/topbar/topbar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './Layout/layout/content/content.component';
import { SidebarComponent } from './Layout/layout/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { TestModule } from './Main/test/test.module';
import { RoutesDirective } from './Layout/directives/routes.directive';
import { SidebarDirective } from './Layout/directives/sidebar.directive';
import { HelloDirective } from './Layout/directives/hello.directive';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    ContentComponent,
    SidebarComponent,
    RoutesDirective,
    SidebarDirective,
    HelloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    TestModule,
    MaterialModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AboutComponent } from './about/about.component';
import { ManualComponent } from './manual/manual.component';
import { AppRouteringModule, routingComponents } from './app-routing.module';
import { CmsComponent } from './cms/cms.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { DuedateComponent } from './duedate/duedate.component';
import { CompletiondateComponent } from './completiondate/completiondate.component';

const appRoutes: Routes = [{ path: 'home' }];
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    AdvantagesComponent,
    AboutComponent,
    ManualComponent,
    CmsComponent,
    SubmittedComponent,
    DuedateComponent,
    CompletiondateComponent,

  ],
  imports: [
    BrowserModule,
    AppRouteringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

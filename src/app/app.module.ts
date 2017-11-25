import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';
import {RouterModule, Routes} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Vista4Component } from './vista4/vista4.component';
import { VistaComponent } from './vista/vista.component';

const appRoutes: Routes = [
    {path: "", component: VistaComponent, data: { depth: 1}},
    {path: "vista2", component: Vista2Component, data: { depth: 2}},
    {path: "vista3", component: Vista3Component, data: { depth: 3}},
    {path: "vista4", component: Vista4Component, data: { depth: 4}}
];

@NgModule({
  declarations: [
    AppComponent,
    Vista2Component,
    Vista3Component,
    Vista4Component,
    VistaComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

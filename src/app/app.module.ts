import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';
import {RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
    {path: "", component: Vista2Component, data: {title: false, depth: 1}},
    {path: "vista3", component: Vista3Component, data: {title: false, depth: 2}}
];

@NgModule({
  declarations: [
    AppComponent,
    Vista2Component,
    Vista3Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01Component } from './pages/page01/page01.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    HeaderLayoutComponent,
    SubNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { Content2Component } from './content2/content2.component';
import { FooterComponent } from './footer/footer.component';
import { HeadMenuAndLogoComponent } from './head-menu-and-logo/head-menu-and-logo.component';
import { Content1Component } from './content1/content1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    Content2Component,
    FooterComponent,
    HeadMenuAndLogoComponent,
    Content1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

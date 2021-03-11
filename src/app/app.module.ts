import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ContentTaskComponent } from './content-task/content-task.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { ContentDescriptionComponent } from './content-description/content-description.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContentComponent,
    ToDoListComponent,
    ContentTaskComponent,
    ContentFormComponent,
    ContentDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

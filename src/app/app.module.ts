import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoContentComponent } from './todo-content/todo-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    TodoListComponent,
    TodoFormComponent,
    TodoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

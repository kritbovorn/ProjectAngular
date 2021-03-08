import { NgModule } from '@angular/core';

import { BrowserModule} from '@angular/platform-browser'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


// ต้องสร้างตัวแปร เพื่อมารับ  และ ส่งค่า :  Module
const MaterialComponent = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserModule
];

@NgModule({
  declarations: [],

  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }

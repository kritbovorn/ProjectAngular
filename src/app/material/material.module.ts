import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

// ต้องสร้างตัวแปร เพื่อมารับ  และ ส่งค่า :  Module
const MaterialComponent = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [],

  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
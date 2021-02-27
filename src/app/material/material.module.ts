import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';

const MaterialComponent = [
  MatButtonModule,
];

@NgModule({
  declarations: [],

  imports: [MatButtonModule],
  exports: [MatButtonModule]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosRoutingModule } from './datos-routing.module';
import { DatosComponent } from './datos.component';


@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule,
    DatosRoutingModule
  ]
})
export class DatosModule { }

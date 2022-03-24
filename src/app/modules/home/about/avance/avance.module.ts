import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvanceRoutingModule } from './avance-routing.module';
import { AvanceComponent } from './avance.component';


@NgModule({
  declarations: [
    AvanceComponent
  ],
  imports: [
    CommonModule,
    AvanceRoutingModule
  ]
})
export class AvanceModule { }

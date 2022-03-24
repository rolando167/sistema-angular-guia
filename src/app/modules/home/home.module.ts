import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

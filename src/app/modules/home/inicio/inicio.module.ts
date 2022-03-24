import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EventosComponent } from './eventos/eventos.component';
import { AlertasComponent } from './alertas/alertas.component';


@NgModule({
  declarations: [
    InicioComponent,
    NoticiasComponent,
    EquipoComponent,
    EventosComponent,
    AlertasComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }

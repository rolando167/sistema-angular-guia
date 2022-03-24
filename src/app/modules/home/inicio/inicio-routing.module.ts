import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasComponent } from './alertas/alertas.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {
      path     : '',
      component: InicioComponent, // router-outlet en el HTML
      children: [
        { path: 'noticias', component: NoticiasComponent },
        { path: 'equipo', component: EquipoComponent },
        { path: 'eventos', component: EventosComponent },
        { path: 'alertas', component: AlertasComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }

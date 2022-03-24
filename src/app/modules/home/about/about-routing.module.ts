import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '',
  component: AboutComponent,
    children:[
      { path: 'mapa', loadChildren: () => import('../about/mapa/mapa.module').then(m => m.MapaModule) },
      { path: 'datos', loadChildren: () => import('../about/datos/datos.module').then(m => m.DatosModule) },
      { path: 'avance', loadChildren: () => import('../about/avance/avance.module').then(m => m.AvanceModule) },
      { path: 'reporte', loadChildren: () => import('../about/reporte/reporte.module').then(m => m.ReporteModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }



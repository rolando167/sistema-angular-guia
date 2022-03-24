import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // INDEPENDIENTE - OPTIMIZADO
    path: 'home',
    children: [
      { path: '', loadChildren: () => import('../app/modules/home/inicio/inicio.module').then(m => m.InicioModule) },
      { path: 'about', loadChildren: () => import('../app/modules/home/about/about.module').then(m => m.AboutModule) }
    ]
  },
  {
    // Trae Mas componentes segun si estan agregados en el grupo module y su ruta
    path: 'auth', children: [
      { path: '', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

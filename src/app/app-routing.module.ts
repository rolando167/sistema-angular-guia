import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {path: '', loadChildren: () => import('../app/modules/home/inicio/inicio.module').then(m => m.InicioModule)},
      {path: 'about', loadChildren: () => import('../app/modules/home/about/about.module').then(m => m.AboutModule)}
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

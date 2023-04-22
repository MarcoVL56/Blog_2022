import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from '../encabezado/presentacion/presentacion.component';

const routes: Routes = [
  {
    path: '', 
    children: [ 
      {path: '', component: PresentacionComponent },
      {path: 'Artículos', loadChildren: () => import('../articulos/articulos.module').then(m => m.ArticulosModule)},
      {path: 'Noticias', loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasModule)},
    ]
  },
  {
    path: '**', 
    redirectTo: ''
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionamientoRoutingModule { }

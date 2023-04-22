import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionFormularioComponent } from './presentacion-formulario/presentacion-formulario.component';

const routes: Routes = [
  {path: '', component: PresentacionFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncabezadoRoutingModule { }

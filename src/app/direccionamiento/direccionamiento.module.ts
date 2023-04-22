import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionamientoRoutingModule } from './direccionamiento-routing.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { EncabezadoModule } from '../encabezado/encabezado.module';

@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    DireccionamientoRoutingModule,
    EncabezadoModule
  ],
  exports:[
    NavegacionComponent
  ]
})
export class DireccionamientoModule { }

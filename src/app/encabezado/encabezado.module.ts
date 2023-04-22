import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoRoutingModule } from './encabezado-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { NoticiasModule } from '../noticias/noticias.module';
import { PresentacionFormularioComponent } from './presentacion-formulario/presentacion-formulario.component';
import { ContactoModule } from '../contacto/contacto.module';
import { ReutilizablesModule } from '../reutilizables/reutilizables.module';


@NgModule({
  declarations: [
    PresentacionComponent,
    PresentacionFormularioComponent
  ],
  imports: [
    CommonModule,
    EncabezadoRoutingModule,
    NoticiasModule,
    ContactoModule,
    ReutilizablesModule,
  ],
  exports:[
    PresentacionComponent,
    PresentacionFormularioComponent
  ]
})
export class EncabezadoModule { }


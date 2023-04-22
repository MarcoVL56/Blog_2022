import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormsModule } from '@angular/forms';
import { InformacionContactoComponent } from './informacion-contacto/informacion-contacto.component';


@NgModule({
  declarations: [
    FormularioContactoComponent,
    InformacionContactoComponent,
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule
  ],
  exports: [
    FormularioContactoComponent,
    InformacionContactoComponent,
  ]
})
export class ContactoModule { }

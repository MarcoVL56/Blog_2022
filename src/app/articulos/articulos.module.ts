import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosRoutingModule } from './articulos-routing.module';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { ArticulosService } from '../servicios/articulos.service';
import { ContactoModule } from '../contacto/contacto.module';

@NgModule({
  declarations: [
   ListaArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ContactoModule,
  ],
  exports:[
    ListaArticulosComponent
  ],
  providers: [
    ArticulosService
  ]

})
export class ArticulosModule { }

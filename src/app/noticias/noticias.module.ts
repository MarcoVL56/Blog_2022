import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasDestacadasComponent } from './noticias-destacadas/noticias-destacadas.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { ComentariosNoticiasComponent } from './comentarios-noticias/comentarios-noticias.component';
import { NoticiasService } from '../servicios/noticias.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ContactoModule } from '../contacto/contacto.module';


@NgModule({
  declarations: [
    NoticiasDestacadasComponent,
    ListaNoticiasComponent,
    ComentariosNoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ContactoModule

  ],
  exports:[
    NoticiasDestacadasComponent,
    ListaNoticiasComponent,
    ComentariosNoticiasComponent
  ],
   providers: [
    NoticiasService
  ],
})
export class NoticiasModule { }


import { Component, OnInit } from '@angular/core';
import {faClock} from "@fortawesome/free-solid-svg-icons"
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-noticias-destacadas',
  templateUrl: './noticias-destacadas.component.html',
  styleUrls: ['./noticias-destacadas.component.css']
})
export class NoticiasDestacadasComponent implements OnInit {

  iconoTiempo:any;
  tamanoIcono:number;
  activarDescripcion:boolean
  textoBoton:string;

  constructor( public noticiasServicio: NoticiasService) { 
    this.iconoTiempo = faClock
    this.tamanoIcono = 25
    this.activarDescripcion = true
    this.textoBoton = "Ver descripción"
  }

  ngOnInit(): void {
  }

  mostrarDescripcion(){
    if(this.activarDescripcion){
      this.activarDescripcion = !this.activarDescripcion
      this.textoBoton = "Ocultar descripción"
    }else{
      this.activarDescripcion = !this.activarDescripcion
      this.textoBoton = "Ver descripción"
    }
  }

}

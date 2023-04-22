import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios-noticias',
  templateUrl: './comentarios-noticias.component.html',
  styleUrls: ['./comentarios-noticias.component.css']
})
export class ComentariosNoticiasComponent implements OnInit {

  comentaristas:any[]
  autor:string

  constructor() { 
    this.autor= ""
    this.comentaristas = [{autor: this.autor, comentario: "La información mostrada fue muy buena"}]
  }

  ngOnInit(): void {
  }

  agregarComentario(inputAutor:any,areaComentario:any){
    this.comentaristas.push({autor: inputAutor.value, comentario: areaComentario.value });
    areaComentario.value ="";
    this.autor= ""

    return false;
  }

}

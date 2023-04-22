import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  public articulos:any
  public suscripcion: Subscription

  constructor(public articulosServicio : ArticulosService) { 
    this.articulos = []

    this.suscripcion = this.articulosServicio.articulosObservable$
    .subscribe((obtenerArticulos: Array<{ nombre:string, correo:string, titulo:string, 
    tipo:string, descripcion:string }>) => { this.articulos = obtenerArticulos},
    err => console.log("Error encontrado: " + err),
    () => console.log("El observable esta listo"));

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.suscripcion){
      this.suscripcion.unsubscribe()
    }
  }

  eliminarArticulo(index:number){
    this.articulosServicio.eliminarArticulo(index)
  }

}

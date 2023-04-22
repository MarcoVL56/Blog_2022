import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class ArticulosService {

  public articulosPersonales: any[]

  private articulos = new Array <{nombre:string, correo:string, titulo:string, tipo:string, descripcion:string}>()
  private articulosSubject = new Subject<Array<{nombre:string, correo:string, titulo:string, tipo:string, descripcion:string}>>()
  public articulosObservable$ = this.articulosSubject.asObservable()


  constructor() { 
    this.articulosPersonales =[{
      nombre:"Marco Vargas", 
      titulo:"Motorola Moto Z", 
      tipo:"Smartphone", 
      descripcion:"Este dispositivo marcó un antes y un después, "+ 
      "sin embargo aunque tuvo grandes avances tecnológicos nunca logró tener las ventas deseadas por la compañia. "+
      "Fue el primer dispositivo en quitar la entrada de audífonos y el segundo en implementar la modularidad en un Smartphone.",
      imagen: "../../../assets/img/listaArticulos/img-motorola.jpg"
    },
    {
      nombre:"Marco Vargas", 
      titulo:"Mouse Razer Viper Mini", 
      tipo:"Periféricos", 
      descripcion:"El Razer Viper Mini en la actualidad es un mouse con las mejores características y con un precio de tan solo "+ 
      "40 dólares, entre sus principales especificaciones se encuentra que tiene un peso de solamente 61 gramos sin necesidad de tener agujeros, posee "+
      "switches ópticos de hasta 50 millones de clicks y un sensor pixar 3335 de hasta 8500 DPI.",
      imagen: "../../../assets/img/listaArticulos/img-razer.jpg"
    }
  
  ]
  
  }

  crearArticulo(nombre:string, correo:string, titulo:string, tipo:string, descripcion:string){
    this.articulos.push({nombre:nombre, correo:correo, titulo:titulo, tipo:tipo, descripcion:descripcion})
    this.articulosSubject.next(this.articulos)
  }

  eliminarArticulo(index:number){
    this.articulos.splice(index, 1)
    this.articulosSubject.next(this.articulos)
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/modelos/articulo';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {
  public enviado = false
  public opcionesArticulos: any= [
    {id: 0, tipo: "Videojuegos"},
    {id: 1, tipo: "Ciberseguridad"},
    {id: 2, tipo: "Smartphones"},
    {id: 3, tipo: "Computadoras"},
    {id: 4, tipo: "Innovacion"},
    {id: 5, tipo: "Criptomonedas"},
    {id: 6, tipo: "Sin especificar"},]

  public articuloCreado = new Articulo("", "", "", this.opcionesArticulos[6], "")
  public contador: number
  public suscripcion: Subscription

  constructor(private articulosServicio : ArticulosService) {  
    this.contador = 0
    this.suscripcion = this.articulosServicio.articulosObservable$
    .subscribe((obtenerArticulos: Array<{ nombre:string, correo:string, 
      titulo:string, tipo:string, descripcion:string }>) => 
      { this.contador = obtenerArticulos.length}, err => console.log("Error encontrado: " + err),
      () => console.log("El observable esta listo"));
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    if(this.suscripcion){
      this.suscripcion.unsubscribe()
    }
  }

  crearArticulo(formularioArticulos: NgForm){

    if(formularioArticulos.valid){
      this.articulosServicio.crearArticulo(formularioArticulos.value.nombre,
        formularioArticulos.value.correo,formularioArticulos.value.tituloArticulo,
        formularioArticulos.value.tipoArticulo.tipo,formularioArticulos.value.descripcionTitulo)
        
      this.enviado= true
      formularioArticulos.reset()
    }else{
      console.log('El formulario no es valido')
    }
  }

}

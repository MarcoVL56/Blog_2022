import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  mostrarOpcion = false 

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.mostrarOpcion = !this.mostrarOpcion
  }

}

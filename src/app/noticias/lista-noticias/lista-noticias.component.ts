import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  constructor(public noticiasServicio: NoticiasService) { }

  ngOnInit(): void {
  }

}

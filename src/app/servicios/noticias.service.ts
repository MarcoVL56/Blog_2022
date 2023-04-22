import { Injectable } from '@angular/core';

@Injectable()

export class NoticiasService {

  noticiasPrincipales:any[]

  noticiasDestacadas:any[]

  noticias:any[]


  constructor() { 
    this.noticiasPrincipales = [
      {titulo:"Cerca el inicio del MSI 2022 del videojuego LoL", 
        categoria:"Gaming", 
        fecha:"29/04/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/noticia-lol.webp", 
        descripcion:"Una de las grandes competiciones "+
        "del videojuego LoL comienza el 10 de mayo"
      },

      {titulo:"Elon Musk buscará autenticar a todos los usuarios de Twitter", 
        categoria:"Redes Sociales", 
        fecha:"01/05/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/noticia-twitter.jpg", 
        descripcion:"Elon Musk busca tener una mayor "+
        "regulación con cada uno de los usuarios de twitter"
      },

      {titulo:"Conti no deja de atacar a Costa Rica", 
        categoria:"Seguridad", 
        fecha:"28/04/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/noticia-ciberseguridad.jpg", 
        descripcion:"Costa Rica es un país que recibe multiples "+
        "ataques y posee una baja seguridad informatica"
      },
  ]

    this.noticiasDestacadas = [
      {titulo:"Nuevo Motorola Frontier", 
        categoria:"Smartphones", 
        fecha:"02/05/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/noticia-motorola.jpg", 
        descripcion:"Este dispositivo estaría saliendo a mediados del año 2022, "+
        "contara con novedosas funciones "+
        "como una pantalla de 144hz y una cámara de 194 megapíxeles."
      }
    ]

    this.noticias = [
      {titulo:"Elon Musk declara el fin del trabajo remoto en Tesla", 
        categoria:"Información", 
        fecha:"09/06/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/listaNoticias/img-elon.jpg", 
        descripcion:"El gran jefe de Tesla y multimillonario Elon Musk "+ 
        "aseguró que apartir de ahora todos sus trabajadores deben presentarse "+ 
        "a las instalaciones para ejercer su trabajo, de lo contrario serán despedidos."
      },

      {titulo:"EA Sports cambiará el nombre del videojuego FIFA", 
        categoria:"Videojuegos", 
        fecha:"07/06/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/listaNoticias/img-fifa.jpg", 
        descripcion:"La gran empresa de videojuegos EA Sports termina contrato con FIFA y decidió no renovar, "+ 
        "esto provoca que el último juego lanzado con dicho nombre será el FIFA 23. "+ 
        "Luego de ese último juego el siguiente se llamará: EA Sports FC."
      },

      {titulo:"Apple no seguirá fabricando el histórico iPod", 
        categoria:"Información", 
        fecha:"04/06/2022", 
        autor:"Marco Vargas", 
        imagen:"../../../assets/img/listaNoticias/img-ipod.jpg", 
        descripcion:"Apple tomó la decisión de no seguir con la fabricación del emblemático dispositivo "+ 
        "ya que en la actualidad dejó de ser interesante para el público porque otros dispositivos de la compañia "+ 
        "poseen la misma funcionalidad y muchas más. Las bajas ventas provocó la decisión final."
    }
    ]
  }
}

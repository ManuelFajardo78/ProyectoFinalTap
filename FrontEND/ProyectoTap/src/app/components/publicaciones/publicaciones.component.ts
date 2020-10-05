import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../modelo/Publicacion.component';
import { PublicacionService } from '../../service/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  model: Publicacion = {id: 0, usuario: '', publicacion: '', fecha: ''};
  publicaciones: any;
  constructor(private servicio: PublicacionService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  buscarPublicacion(){
    this.servicio.obtenerPublicaciones().subscribe(datos => {
      this.publicaciones = datos;
      console.log(datos);
    });
  }

}

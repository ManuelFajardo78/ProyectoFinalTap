import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona.component';
import { Publicacion } from 'src/app/modelo/Publicacion.component';
import { ComentarioService } from '../../service/comentario.service';
import { Comentario } from '../../modelo/Comentario.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-publicaciones',
  templateUrl: './tarjeta-publicaciones.component.html',
  styleUrls: ['./tarjeta-publicaciones.component.css']
})
export class TarjetaPublicacionesComponent implements OnInit {

  @Input() publicaciones: Publicacion;
  @Input() indice: number;
  @Output() publicSleccionado: EventEmitter<number>;

  model: Comentario = {id: 0, usuario: LoginComponent.ususario.usuario, comentario: '', id_publicacion: 0};
  conteo: any;
  comentario: Comentario;
  comentarios: any;
  showImagen = false;
  constructor(private service: ComentarioService, private routes: Router) {
    this.publicSleccionado = new EventEmitter();
  }
  ngOnInit(): void {
    this.obtenerComentarios();
  }

  // tslint:disable-next-line: typedef
  registrarComentario(){
    this.model.id_publicacion = this.publicaciones.id;
    this.service.obtenerid().subscribe(data => {
      console.log(data);
      this.conteo = data;
      this.model.id = this.conteo + 1;
      if (this.model.id !== 0 && this.model.comentario !== '' && this.model.usuario !== null && this.model.id_publicacion !== 0){
        this.service.registrarComentario(this.model).subscribe(data2 => console.log(data2));
        this.obtenerComentarios();
      }
    });
  }

  // tslint:disable-next-line: typedef
  obtenerComentarios(){
    this.service.obtenerComentario(this.publicaciones.id).subscribe(datos => {
      this.comentarios = datos;
      console.log(datos);
      if (datos !== null){
        this.showImagen = true;
      }
    });
  }
}

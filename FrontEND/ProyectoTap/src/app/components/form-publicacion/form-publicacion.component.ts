import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../modelo/Publicacion.component';
import { PublicacionService } from '../../service/publicacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelo/Usuario.component';

@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrls: ['./form-publicacion.component.css']
})
export class FormPublicacionComponent implements OnInit {
  f = new Date();
  fech: string = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
  model: Publicacion = {id: 0, usuario: '', publicacion: '', fecha: this.fech};
  constructor(private servicio: PublicacionService, private routes: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  resgistarPublicacion(){
    this.servicio.registrarPublicacion(this.model).subscribe(data => console.log(data));
    this.routes.navigate(['ingreso']);
  }
}

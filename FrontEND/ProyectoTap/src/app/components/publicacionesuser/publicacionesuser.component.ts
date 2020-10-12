import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/modelo/Publicacion.component';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-publicacionesuser',
  templateUrl: './publicacionesuser.component.html',
  styleUrls: ['./publicacionesuser.component.css']
})
export class PublicacionesuserComponent implements OnInit {
  publicacion: Publicacion;
  publicacionesuser: any;
  constructor(private servicio: PublicacionService) { }

  ngOnInit(): void {
    this.buscarPublicacionUsuario();
  }

  // tslint:disable-next-line: typedef
  buscarPublicacionUsuario(){
    this.servicio.obtenerPublicacionesBY(LoginComponent.ususario.usuario).subscribe(datos => {
      this.publicacionesuser = datos;
      console.log(datos);
    });
  }

}

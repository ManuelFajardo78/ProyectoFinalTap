import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../modelo/Usuario.component';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/modelo/Persona.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private servicio: UsuarioService, private routes: Router, private servicio2: PersonaService) {

  }
  public static ususario: Usuario;
  public static persona: Persona;
  public model: Usuario = {usuario: '', password: '', cedula: ''};
  user: any;
  pers: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  ingreso(){
    this.servicio.buscarUser(this.model.usuario, this.model.password).subscribe(datos => {
      this.user = datos;
      if (this.user !== null){
        this.servicio2.buscarPersonas(this.user.cedula).subscribe(datos2 => {
        this.pers = datos2;
        LoginComponent.persona = this.pers;
        LoginComponent.ususario = this.user;
        this.routes.navigate(['ingreso']);
      });
      }else{
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}

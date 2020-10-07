import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../modelo/Usuario.component';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/modelo/Persona.component';

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

  ingreso(){
    this.servicio.buscarUser(this.model.usuario, this.model.password).subscribe(datos => {
      this.user = datos;
      console.log('login' + datos);
    });
    if (this.user !== null){
      this.servicio2.buscarPersonas(this.model.cedula).subscribe(datos => {
      this.pers = datos;
      console.log(datos);
      LoginComponent.persona = this.pers;
    });
      LoginComponent.ususario = this.model;
      this.routes.navigate(['ingreso']);
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }
}

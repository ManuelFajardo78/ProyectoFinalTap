import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../modelo/Usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: Usuario = {usuario: '', password: '', cedula: ''};
  user: any = null;
  constructor(private servicio: UsuarioService, private routes: Router) { }
  ngOnInit(): void {
  }

  ingreso(){
    this.servicio.buscarUser(this.model.usuario, this.model.password).subscribe(datos => {
      this.user = datos;
      console.log(datos);
    });
    if (this.user !== null){
      this.routes.navigate(['ingreso']);
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }
}

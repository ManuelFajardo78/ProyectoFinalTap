import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../modelo/Usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Usuario = {usuario: '', password: '', cedula: ''};
  @Input() user: any;
  constructor(private servicio: UsuarioService, private routes: Router) { }
  ngOnInit(): void {
  }

  public ingreso(){
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

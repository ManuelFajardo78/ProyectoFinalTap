import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../modelo/Usuario.component';
import { Router } from '@angular/router';
import { UseringresoService } from '../../service/useringreso.service';
import { UserIngreso } from '../../modelo/UserIngreso.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: Usuario = {usuario: '', password: '', cedula: ''};
  public model2: UserIngreso = {id: 1, usuario: this.model.usuario};
  user: any;
  constructor(private servicio: UsuarioService, private routes: Router, private servicio2: UseringresoService) { 
    this.servicio2.eliminarBY(1);
  }
  ngOnInit(): void {
  }

  ingreso(){
    this.servicio.buscarUser(this.model.usuario, this.model.password).subscribe(datos => {
      this.user = datos;
      console.log(datos);
    });
    if (this.user !== null){
      this.servicio2.registrarUser(this.model2).subscribe(datos => {
        this.user = datos;
        console.log(datos);
      });
      this.routes.navigate(['ingreso']);
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }
}

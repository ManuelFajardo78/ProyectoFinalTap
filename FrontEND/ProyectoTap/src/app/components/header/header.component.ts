import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Usuario } from 'src/app/modelo/Usuario.component';
import { Persona } from 'src/app/modelo/Persona.component';
import { Router } from '@angular/router';
import { routing } from '../../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
usuario: Usuario = LoginComponent.ususario;
persona: Persona = LoginComponent.persona;
pers: any;
  constructor(private routes: Router) {
  }

  ngOnInit(): void {
  }

  salir(){
    this.routes.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Usuario } from 'src/app/modelo/Usuario.component';
import { Persona } from 'src/app/modelo/Persona.component';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
usuario: Usuario = LoginComponent.ususario;
persona: Persona = LoginComponent.persona;
pers: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}

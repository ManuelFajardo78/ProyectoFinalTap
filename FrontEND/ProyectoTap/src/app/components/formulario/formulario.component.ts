import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../modelo/Persona.component';
import { Usuario } from '../../modelo/Usuario.component';
import { PersonaService } from '../../service/persona.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  model: Persona = {cedula: '', nombre: '', apellido: '', email: ''};
  model2: Usuario = {usuario: '', password: '', imagen:  '', cedula: this.model.cedula};
  constructor(private servicio: PersonaService, private routes: Router) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  public registPersona() {
    this.servicio.registrarPersonas(this.model).subscribe(data => console.log(data));
    this.routes.navigate(['login']);
  }

}

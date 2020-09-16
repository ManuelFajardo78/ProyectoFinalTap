import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona.component';
import { PersonaService } from '../../service/persona.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  model: Persona = {cedula: '', nombre: '', apellido: '', email: '', edad: 0};
  constructor(private servicio: PersonaService, private routes: Router) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  registPersona(){
    this.servicio.registrarPersonas(this.model).subscribe(data => console.log(data));
    this.routes.navigate(['listPerson']);
  }

}

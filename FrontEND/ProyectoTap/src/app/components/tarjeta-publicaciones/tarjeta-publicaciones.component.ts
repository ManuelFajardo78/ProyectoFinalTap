import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona.component';
import { Publicacion } from 'src/app/modelo/Publicacion.component';

@Component({
  selector: 'app-tarjeta-publicaciones',
  templateUrl: './tarjeta-publicaciones.component.html',
  styleUrls: ['./tarjeta-publicaciones.component.css']
})
export class TarjetaPublicacionesComponent implements OnInit {

  @Input() publicaciones: Publicacion;
  @Input() indice: string;
  @Output() publicSleccionado: EventEmitter<string>;
  constructor() {
    this.publicSleccionado = new EventEmitter();
  }
  ngOnInit(): void {
  }

}

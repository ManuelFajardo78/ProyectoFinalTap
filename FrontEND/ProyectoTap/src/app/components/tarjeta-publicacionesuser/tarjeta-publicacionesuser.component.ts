import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Publicacion } from 'src/app/modelo/Publicacion.component';

@Component({
  selector: 'app-tarjeta-publicacionesuser',
  templateUrl: './tarjeta-publicacionesuser.component.html',
  styleUrls: ['./tarjeta-publicacionesuser.component.css']
})
export class TarjetaPublicacionesuserComponent implements OnInit {
  @Input() publicacionesuser: Publicacion;
  @Input() indice: string;
  @Output() publicSleccionado: EventEmitter<string>;
  constructor() {
    this.publicSleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

}

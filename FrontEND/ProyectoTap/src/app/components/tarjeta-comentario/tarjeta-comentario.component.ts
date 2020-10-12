import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../../modelo/Comentario.component';

@Component({
  selector: 'app-tarjeta-comentario',
  templateUrl: './tarjeta-comentario.component.html',
  styleUrls: ['./tarjeta-comentario.component.css']
})
export class TarjetaComentarioComponent implements OnInit {

  @Input() comentarios: Comentario;
  @Input() indice: number;
  @Output() publicSleccionado: EventEmitter<number>;
  constructor() {
    this.publicSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

}

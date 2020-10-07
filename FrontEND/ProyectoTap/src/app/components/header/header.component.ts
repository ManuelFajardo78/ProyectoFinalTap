import { Component, OnInit } from '@angular/core';
import { UseringresoService } from 'src/app/service/useringreso.service';
import { PersonaService } from '../../service/persona.service';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private servicio: UseringresoService, private servicio2: PersonaService, private servicio3: UsuarioService) { 
  }

  ngOnInit(): void {
  }

}

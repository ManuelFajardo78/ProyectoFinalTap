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
  user: any;
  usuario: any;
  persona: any;
  constructor(private servicio: UseringresoService, private servicio2: PersonaService, private servicio3: UsuarioService) { 
    this.servicio.obtenerUser().subscribe(datos => {
      this.user = datos;
      console.log(datos);
    });
    this.servicio3.obtenerUser2(this.user.usuario).subscribe(datos => {
      this.usuario = datos;
      console.log(datos);
    });
    this.servicio2.buscarPersonas(this.usuario.cedula).subscribe(datos => {
      this.persona = datos;
      console.log(datos);
    });
  }

  ngOnInit(): void {
  }

}

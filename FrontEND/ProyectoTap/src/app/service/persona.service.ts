import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/Persona.component';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  Url = 'http://localhost:9494';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerPersonas(){
    return this.http.get<Persona[]>(this.Url + '/listpers');
  }

  // tslint:disable-next-line: typedef
  registrarPersonas(persona: Persona){
    return this.http.post<Persona>(this.Url + '/guardarpers', persona);
  }
}

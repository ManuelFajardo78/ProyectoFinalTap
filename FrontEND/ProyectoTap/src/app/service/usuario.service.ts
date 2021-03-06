import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Url = 'http://localhost:9494';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerUsuarios(){
    return this.http.get<Usuario[]>(this.Url + '/listuser');
  }

  // tslint:disable-next-line: typedef
  registrarUsuario(user: Usuario){
    return this.http.post<Usuario>(this.Url + '/guardarusuario', user);
  }

  buscarUser(user: string, pass: string):
    // tslint:disable-next-line: ban-types
    Observable <Object> {
      return this.http.get(`${this.Url}/buscar/{user},{pass}?pass=${pass}&user=${user}`);
    }
  obtenerUser2(user: string):
    // tslint:disable-next-line: ban-types
    Observable <Object> {
      return this.http.get(`${this.Url}/buscar2/{user}?user=${user}`);
    }
}

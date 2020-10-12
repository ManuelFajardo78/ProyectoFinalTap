import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../modelo/Comentario.component';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  Url = 'http://localhost:9494';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerComentario(publicID: number){
    return this.http.get<Comentario[]>(this.Url + '/listcoment/' + publicID);
  }

  // tslint:disable-next-line: typedef
  registrarComentario(comentario: Comentario){
    return this.http.post<Comentario>(this.Url + '/guardarcoment', comentario);
  }
}

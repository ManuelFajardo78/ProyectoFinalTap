import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../modelo/Comentario.component';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  Url = 'http://localhost:9494';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerComentario(publicID: number):
  // tslint:disable-next-line: ban-types
  Observable <Object> {
    return this.http.get(`${this.Url}/listcomen/{id}?id=${publicID}`);
  }
    // return this.http.get<Comentario[]>(this.Url + '/listcomen/' + publicID);

  // tslint:disable-next-line: typedef
  registrarComentario(comentario: Comentario){
    return this.http.post<Comentario>(this.Url + '/guardarcoment', comentario);
  }

  // tslint:disable-next-line: typedef
  obtenerid(){
    return this.http.get(this.Url + '/comencount');
  }
}

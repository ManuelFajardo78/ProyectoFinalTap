import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../modelo/Publicacion.component';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  Url = 'http://localhost:9494/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerPublicaciones(){
    return this.http.get<Publicacion[]>(this.Url + '/listpubl');
  }

  // tslint:disable-next-line: typedef
  registrarPublicacion(publicacion: Publicacion){
    return this.http.post<Publicacion>(this.Url + '/guardarpublic', publicacion);
  }

  // tslint:disable-next-line: typedef
  obtenerid(){
    return this.http.get(this.Url + '/publcount');
  }

  obtenerPublicacionesBY(usuario: string){
    return this.http.get<Publicacion[]>(this.Url + '/listpubl/' + usuario);
  }
}

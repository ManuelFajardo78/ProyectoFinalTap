import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../modelo/Publicacion.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  Url = 'http://localhost:9494/api';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerPublicaciones(){
    return this.http.get<Publicacion[]>(this.Url + '/listpubl');
  }

  // tslint:disable-next-line: typedef
  registrarPublicacion(publicacion: Publicacion){
    return this.http.post<Publicacion>(this.Url + '/guardarpublic', publicacion);
  }
}

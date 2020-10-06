import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserIngreso } from '../modelo/UserIngreso.component';

@Injectable({
  providedIn: 'root'
})
export class UseringresoService {
  Url = 'http://localhost:9494';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  obtenerUser(){
    return this.http.get<UserIngreso[]>(this.Url + '/listuseringreso');
  }

  // tslint:disable-next-line: typedef
  registrarUser(user: UserIngreso){
    return this.http.post<UserIngreso>(this.Url + '/guardaruserig', user);
  }

  eliminarBY(id: number){
    console.log('eliminado');
    return this.http.delete(this.Url + '/eliminarbyid/' + id);
  }

}

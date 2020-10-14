import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Comentario } from 'src/app/modelo/Comentario.component';
import { Publicacion } from 'src/app/modelo/Publicacion.component';
import { ComentarioService } from 'src/app/service/comentario.service';
import { PublicacionService } from '../../service/publicacion.service';

@Component({
  selector: 'app-tarjeta-publicacionesuser',
  templateUrl: './tarjeta-publicacionesuser.component.html',
  styleUrls: ['./tarjeta-publicacionesuser.component.css']
})
export class TarjetaPublicacionesuserComponent implements OnInit {

  public static publicacionDatos: Publicacion;
  @Input() publicacionesuser: Publicacion;
  @Input() indice: string;
  @Output() publicSleccionado: EventEmitter<string>;

  comentario: Comentario;
  comentarios: any;
  showImagen = false;

  bucketInstance: any;
  params: any;

  constructor(private service: ComentarioService, private service2: PublicacionService, private routes: Router) {
      // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:4beca4a9-a553-4d94-aefd-5f032f88c835',
    });

    this.publicSleccionado = new EventEmitter();
   }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  // tslint:disable-next-line: typedef
  enviarDatos(){
    TarjetaPublicacionesuserComponent.publicacionDatos = this.publicacionesuser;
    this.routes.navigate(['ingreso/adminpublic/editar']);
  }
  // tslint:disable-next-line: typedef
  obtenerComentarios(){
    this.service.obtenerComentario(this.publicacionesuser.id).subscribe(datos => {
      this.comentarios = datos;
      console.log(datos);
      if (datos !== null){
        this.showImagen = true;
      }
    });
  }
  // tslint:disable-next-line: typedef
  eliminar(){
    this.service2.eliminarPublicacion(this.publicacionesuser.id).subscribe(datos => console.log(datos));
    this.eliminarBukets();
  }

  // tslint:disable-next-line: typedef
  eliminarBukets() {
    this.bucketInstance  = new AWS.S3();
    this.params = {
        Bucket: 'bucketimgen2',
        Key: this.publicacionesuser.usuario + '_' + this.publicacionesuser.id + '.jpg'
    };
    this.bucketInstance.deleteObject(this.params, (error, data) => {
        if (data) {
            console.log('la imagen se elimino');
        } else {
            console.log('imagen no eliminada ' + error);
        }
    });

    this.bucketInstance = new AWS.S3();
    this.params = {
        Bucket: 'bucketaudiotap',
        Key: this.publicacionesuser.usuario + '_' + this.publicacionesuser.id + '.mp3'
    };
    this.bucketInstance.deleteObject(this.params, (err, data) => {
        if (data) {
            console.log('el audio se elimino');
        } else {
            console.log('audio no eliminada' + err);
        }
    });
  }
}

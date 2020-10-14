import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Publicacion } from 'src/app/modelo/Publicacion.component';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { LoginComponent } from '../login/login.component';
import { TarjetaPublicacionesuserComponent } from '../tarjeta-publicacionesuser/tarjeta-publicacionesuser.component';
declare const navigator: any;
declare const MediaRecorder: any;

@Component({
  selector: 'app-editpublicacion',
  templateUrl: './editpublicacion.component.html',
  styleUrls: ['./editpublicacion.component.css']
})
export class EditpublicacionComponent implements OnInit {
  publicacion: Publicacion = TarjetaPublicacionesuserComponent.publicacionDatos;
  // S3
  albumBucketNameI = 'bucketimgen2';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'bucketimgen2'},
  });

  albumBucketNameA = 'bucketaudiotap';
  s32 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'bucketaudiotap'},
  });

  // comprobra;
  ingimg = true;
  ingdatos = true;
  subeft = 0;
  ingaudio = true;

  // imagen
   foto: any;
   archivo = null;
  source: any;
  urlImagen = null;
  showImagen = false;
  showAudio = false;
  error = false;
  subiendo = false;

  bucketInstance: any;
  params: any;

  // audio
  public isRecording: boolean = false;
  private chunks: any = [];
  private mediaRecorder: any;
  gaudio: any;

  f = new Date();
  fech: string = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
  model3: Publicacion = {id: 0, usuario: LoginComponent.ususario.usuario, publicacion: '', fecha: this.fech};
  constructor(private servicio: PublicacionService, private routes: Router) {
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:4beca4a9-a553-4d94-aefd-5f032f88c835',
    });
    const onSuccess = stream => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.onstop = e => {
        const audio = new Audio();
        const blob = new Blob(this.chunks, { type: 'audio/mpeg; codecs=opus' });
        this.gaudio = blob;
        this.chunks.length = 0;
        audio.src = window.URL.createObjectURL(blob);
        audio.load();
        audio.play();
      };

      this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
    };

    navigator.getUserMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    navigator.getUserMedia({ audio: true }, onSuccess, e => console.log(e));
    }

  ngOnInit(): void {}

  public record() {
    this.isRecording = true;
    this.mediaRecorder.start();
  }
  public stop() {
    this.isRecording = false;
    this.showAudio = true;
    this.mediaRecorder.stop();
  }

  // tslint:disable-next-line: typedef
  public editarPublicacion(){
    this.model3.id = this.publicacion.id;
    if (this.showImagen){
      this.eliminarBuketsI();
    }
    if (this.showAudio){
      this.eliminarBuketsA();
    }
    if (this.model3.usuario !== '' && this.model3.id !== 0 && this.model3.publicacion !== '') {
      this.crearPublicacion();
      this.routes.navigate(['ingreso']);
    }else{
      alert('Debe agresar alguna imagen, audio o publicación');
    }
  }
  // tslint:disable-next-line: typedef
  crearPublicacion(){
    if (this.showAudio){
      this.registrarBA();
    }
    this.servicio.registrarPublicacion(this.model3).subscribe(data => {
      console.log(data);
    });
  }


  onClickSubir = async (event) => {
    event.preventDefault();
    if (this.archivo && this.model3.usuario !== '') {
      try {
        console.log(this.archivo);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketNameI,
            Key: this.model3.usuario + '_' + this.model3.id + '.jpg',
            Body: this.archivo,
            ACL: 'public-read',
          },
        }).promise();
        this.urlImagen = data.Location;
        this.subiendo = false;
        this.showImagen = true;
        this.subeft = 1;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      alert('SELECCIONE UNA FOTO');
    }
  }

  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  }

  public async registrarBA() {
    if (this.gaudio) {
      try {
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketNameA,
            Key: this.model3.usuario + '_' + this.model3.id + '.mp3',
            Body: this.gaudio,
            ACL: 'public-read',
          },
        }).promise();
        this.subiendo = false;
        this.source = this.gaudio;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          this.ingaudio = false;
          alert('Audio no registardo');
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      this.ingaudio = false;
      alert('Grabe un audio');
    }
  }

  eliminarBuketsI() {
    this.bucketInstance  = new AWS.S3();
    this.params = {
        Bucket: 'bucketimgen2',
        Key: this.publicacion.usuario + '_' + this.publicacion.id + '.jpg'
    };
    this.bucketInstance.deleteObject(this.params, (error, data) => {
        if (data) {
            console.log('la imagen se elimino');
        } else {
            console.log('imagen no eliminada ' + error);
        }
    });

  }
  eliminarBuketsA() {
    this.bucketInstance = new AWS.S3();
    this.params = {
        Bucket: 'bucketaudiotap',
        Key: this.publicacion.usuario + '_' + this.publicacion.id + '.mp3'
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

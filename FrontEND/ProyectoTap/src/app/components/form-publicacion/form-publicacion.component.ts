import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Publicacion } from '../../modelo/Publicacion.component';
import { PublicacionService } from '../../service/publicacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelo/Usuario.component';
import { LoginComponent } from '../login/login.component';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-form-publicacion',
  templateUrl: './form-publicacion.component.html',
  styleUrls: ['./form-publicacion.component.css']
})
export class FormPublicacionComponent implements OnInit {
  public static ususario: Usuario;

   // imagen
   @ViewChild('video') video: ElementRef;
   @ViewChild('canvas') canvas: ElementRef;
   foto: any;
   archivo = null;
  source: any;
  urlImagen = null;
  showImagen = false;
  error = false;
  subiendo = false;

  f = new Date();
  fech: string = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
  model3: Publicacion = {id: 0, usuario: '', publicacion: '', fecha: this.fech};
  constructor(private servicio: PublicacionService, private routes: Router) {
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:4beca4a9-a553-4d94-aefd-5f032f88c835',
    });
    }
    // S3
    albumBucketNameI = 'bucketimgen2';
    s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: 'bucketimgen2'},
    });

    // comprobra;
    ingimg = true;
    ingdatos = true;
    subeft = 0;
  ngOnInit(): void {
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(screenStream => {
        this.video.nativeElement.srcObject = screenStream;
        this.video.nativeElement.play();
      });
    }
  }
  // tslint:disable-next-line: typedef
  public realizarPublicacion(){
    if (this.archivo && this.model3.usuario !== ''){
      this.crearPublicacion();
      if(this.subeft === 0){
        this.registrarPubli();
      }
      this.routes.navigate(['ingreso']);
    }else{
      alert('Revisar que la imagen  este cargada');
    }
  }
  // tslint:disable-next-line: typedef
  crearPublicacion(){
    this.servicio.registrarPublicacion(this.model3).subscribe(data => console.log(data));;
  }

  public capturar() {
    var context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 300, 250);
    this.foto = this.canvas.nativeElement.toDataURL('image/png');
    this.foto = this.foto.split(',')[1];
    this.archivo = this.foto;
  }

  // tslint:disable-next-line: typedef
  public async registrarPubli() {
    if (this.archivo) {
      try {
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketNameI,
            Key: this.model3.usuario + '.jpg',
            // tslint:disable-next-line: deprecation
            Body: new Buffer(this.archivo, 'base64'),
            ACL: 'public-read',
          },
        }).promise();
        this.subiendo = false;
        this.showImagen = true;
        this.source = this.archivo;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          this.ingimg = false;
          alert('Imagen no registardo');
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      alert('Tomese una foto');
      this.ingimg = false;
    }
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
            Key: this.model3.usuario + '.jpg',
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
}

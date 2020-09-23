import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../modelo/Persona.component';
import { Usuario } from '../../modelo/Usuario.component';
import { PersonaService } from '../../service/persona.service';
import * as AWS from 'aws-sdk';
import { Buffer } from 'buffer';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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

  model: Persona = {cedula: '', nombre: '', apellido: '', email: ''};
  model2: Usuario = {usuario: '', password: '', cedula: this.model.cedula};
  constructor(private servicio: PersonaService, private routes: Router) {}
  
  // S3
  albumBucketNameI = 'bucketimgen';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'bucketimgen'},
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
  public registPersona() {
    this.servicio.registrarPersonas(this.model).subscribe(data => console.log(data));
    this.routes.navigate(['login']);
  }
  public capturar() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 300, 250);
    this.foto = this.canvas.nativeElement.toDataURL("image/png");
    this.foto = this.foto.split(",")[1];
    this.archivo = this.foto;
  }

  public async registrarBI() {
    if (this.archivo) {
      try {
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketNameI,
            Key: this.model.cedula + '.jpg',
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
    if (this.archivo) {
      try {
        console.log(this.archivo);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketNameI,
            Key: this.model.cedula + '.jpg',
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

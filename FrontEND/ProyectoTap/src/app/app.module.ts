import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormPublicacionComponent } from './components/form-publicacion/form-publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { TarjetaPublicacionesComponent } from './components/tarjeta-publicaciones/tarjeta-publicaciones.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PublicacionService } from './service/publicacion.service';
import { PersonaService } from './service/persona.service';
import { TarjetaComentarioComponent } from './components/tarjeta-comentario/tarjeta-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FormularioComponent,
    LoginComponent,
    PrincipalComponent,
    FormPublicacionComponent,
    PublicacionesComponent,
    TarjetaPublicacionesComponent,
    PublicacionComponent,
    TarjetaComentarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [PersonaService,
    PublicacionService],
  bootstrap: [AppComponent],
})
export class AppModule { }

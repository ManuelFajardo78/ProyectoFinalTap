
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { FormPublicacionComponent } from './components/form-publicacion/form-publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';

const appRoutes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full'  },
    { path: 'registro', component: BodyComponent, pathMatch: 'full' },
    { path: 'ingreso', component: PrincipalComponent, pathMatch: 'full' },
    { path: 'formPub', component: FormPublicacionComponent, pathMatch: 'full'  },
    { path: 'listPublic', component: PublicacionesComponent, pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);

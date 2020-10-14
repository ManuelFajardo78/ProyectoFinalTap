
import { RouterModule} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormPublicacionComponent } from './components/form-publicacion/form-publicacion.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicacionesuserComponent } from './components/publicacionesuser/publicacionesuser.component';
import { EditpublicacionComponent } from './components/editpublicacion/editpublicacion.component';

const appRoutes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full'  },
    { path: 'registro', component: BodyComponent, pathMatch: 'full' },
    { path: 'ingreso', component: PrincipalComponent, pathMatch: 'full' },
    { path: 'ingreso/registrarpublic', component: FormPublicacionComponent},
    { path: 'ingreso/listapublic', component: PublicacionesComponent},
    { path: 'ingreso/adminpublic', component: PublicacionesuserComponent},
    { path: 'ingreso/adminpublic/editar', component: EditpublicacionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

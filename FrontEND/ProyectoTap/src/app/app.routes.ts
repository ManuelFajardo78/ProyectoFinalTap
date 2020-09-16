
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';

const ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: 'Registro', component: FormularioComponent},
    { path: 'login', component: LoginComponent }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);

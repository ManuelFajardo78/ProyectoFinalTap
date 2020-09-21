
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full'  },
    { path: 'registro', component: BodyComponent, pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { AboutMeComponent } from './componentes/pages/about-me/about-me.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AltaUsuarioComponent } from './componentes/pages/alta-usuario/alta-usuario.component';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: './home' },
    { path: 'home', component: HomeComponent },
    {
        path: 'login',
        component: LoginComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/altaUsuario']))
    },
    { path: 'altaUsuario', component: AltaUsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutMeComponent }
];

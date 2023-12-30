import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent),
        title: "Login"
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/components/register/register.component').then(m => m.RegisterComponent),
        title: "Register"
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: "Home"
    },
    {
        path: 'motorcycles',
        loadComponent: () => import('./pages/motorcycles/motorcycles.component').then(m => m.MotorcyclesComponent),
        title: "Motorcycles"
    }
];

import {Routes} from '@angular/router';
import {CreateComponent} from "./motorcycles/components/create/create.component";
import {MotorcyclesComponent} from "./pages/motorcycles/motorcycles.component";

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
        component: MotorcyclesComponent,
        // loadComponent: () => import('./pages/motorcycles/motorcycles.component').then(m => m.MotorcyclesComponent),
        title: "My Motorcycles",
        children: [
            {
                path: 'create',
                component: CreateComponent,
                title: 'Add Motorcycle'
            },
        ]
    },
    // {
    //     path: 'create',
    //     // component: CreateComponent,
    //     loadComponent: () => import('./motorcycles/components/create/create.component').then(m => m.CreateComponent),
    //     title: 'Add Motorcycle'
    // },
];

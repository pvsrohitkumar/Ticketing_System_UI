import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup').then(m => m.Signup)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'logout',
        loadComponent: () => import('./logout/logout').then(m => m.Logout)
    }
];

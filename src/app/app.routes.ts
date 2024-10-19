import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

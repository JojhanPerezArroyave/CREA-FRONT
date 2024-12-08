import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/container/auth-container'),
    data: { hideMenu: true },
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/classrooms/container/classroom-list-container'),
  },
  {
    path: 'upload-classrooms',
    loadComponent: () => import('./modules/upload-classrooms/container/upload-classrooms-container'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/classrooms/container/classroom-list-container'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'reservations',
    loadChildren: './reservations/reservations.module#ReservationsModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

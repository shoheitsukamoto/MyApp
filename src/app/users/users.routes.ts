import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

export const UserRoutes: Route[] = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full'
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(UserRoutes);

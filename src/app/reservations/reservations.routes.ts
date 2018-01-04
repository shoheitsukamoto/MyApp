import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ReservationsComponent } from './reservations.component';

export const UserRoutes: Route[] = [
  {
    path: '',
    component: ReservationsComponent,
    pathMatch: 'full'
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(UserRoutes);

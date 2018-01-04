import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const UserRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(UserRoutes);

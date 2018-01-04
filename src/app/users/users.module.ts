import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './users.routes';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

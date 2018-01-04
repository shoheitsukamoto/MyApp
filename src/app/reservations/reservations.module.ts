import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { routing } from './reservations.routes';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ReservationsComponent]
})
export class ReservationsModule { }

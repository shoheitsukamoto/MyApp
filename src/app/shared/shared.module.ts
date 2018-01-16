import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng
import { AccordionModule,
        InputTextModule,
        PasswordModule
      } from 'primeng/primeng';
import { ServiceTitleComponent } from './components/service-title/service-title.component';

@NgModule({
  declarations: [
    ServiceTitleComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    AccordionModule,
    ServiceTitleComponent
  ]
})
export class SharedModule { }

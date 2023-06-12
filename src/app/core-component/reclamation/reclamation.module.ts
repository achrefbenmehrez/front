import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { DatepickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    sharedModule,
    DatepickerModule,
  ]
})
export class ReclamationModule { }

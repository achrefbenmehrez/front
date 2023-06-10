import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';


@NgModule({
  declarations: [
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }

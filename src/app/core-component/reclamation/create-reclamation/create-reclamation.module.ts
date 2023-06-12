import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReclamationRoutingModule } from './create-reclamation-routing.module';
import { CreateReclamationComponent } from './create-reclamation.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateReclamationComponent
  ],
  imports: [
    CommonModule,
    CreateReclamationRoutingModule,
    sharedModule
  ]
})
export class CreateReclamationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeDetailsRoutingModule } from './commande-details-routing.module';
import { CommandeDetailsComponent } from './commande-details.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommandeDetailsComponent
  ],
  imports: [
    CommonModule,
    CommandeDetailsRoutingModule,
    sharedModule
  ]
})
export class CommandeDetailsModule { }

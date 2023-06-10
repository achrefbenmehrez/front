import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommandeComponent
  ],
  imports: [
    CommonModule, 
    CommandeRoutingModule,
    sharedModule
  ]
})
export class CommandeModule { }

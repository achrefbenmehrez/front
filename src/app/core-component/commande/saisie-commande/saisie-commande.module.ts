import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisieCommandeRoutingModule } from './saisie-commande-routing.module';
import { SaisieCommandeComponent } from './saisie-commande.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SaisieCommandeComponent
  ],
  imports: [
    CommonModule,
    SaisieCommandeRoutingModule,
    sharedModule
  ]
})
export class SaisieCommandeModule { }

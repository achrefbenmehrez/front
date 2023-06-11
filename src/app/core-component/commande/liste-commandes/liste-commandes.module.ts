import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeCommandesRoutingModule } from './liste-commandes-routing.module';
import { ListeCommandesComponent } from './liste-commandes.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListeCommandesComponent
  ],
  imports: [
    CommonModule,
    ListeCommandesRoutingModule,
    sharedModule
  ]
})
export class ListeCommandesModule { }

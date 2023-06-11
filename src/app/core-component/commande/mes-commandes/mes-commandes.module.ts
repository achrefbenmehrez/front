import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesCommandesRoutingModule } from './mes-commandes-routing.module';
import { MesCommandesComponent } from './mes-commandes.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MesCommandesComponent
  ],
  imports: [
    CommonModule,
    MesCommandesRoutingModule,
    sharedModule
  ]
})
export class MesCommandesModule { }

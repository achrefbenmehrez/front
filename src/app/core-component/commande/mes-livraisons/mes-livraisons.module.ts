import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesLivraisonsRoutingModule } from './mes-livraisons-routing.module';
import { MesLivraisonsComponent } from './mes-livraisons.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MesLivraisonsComponent
  ],
  imports: [
    CommonModule,
    MesLivraisonsRoutingModule,
    sharedModule
  ]
})
export class MesLivraisonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesReclamationsRoutingModule } from './mes-reclamations-routing.module';
import { MesReclamationsComponent } from './mes-reclamations.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MesReclamationsComponent
  ],
  imports: [
    CommonModule,
    MesReclamationsRoutingModule,
    sharedModule
  ]
})
export class MesReclamationsModule { }

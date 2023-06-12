import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsNonTraiteRoutingModule } from './reclamations-non-traite-routing.module';
import { ReclamationsNonTraiteComponent } from './reclamations-non-traite.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReclamationsNonTraiteComponent
  ],
  imports: [
    CommonModule,
    ReclamationsNonTraiteRoutingModule,
    sharedModule
  ]
})
export class ReclamationsNonTraiteModule { }

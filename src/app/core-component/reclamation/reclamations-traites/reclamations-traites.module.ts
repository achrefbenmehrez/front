import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsTraitesRoutingModule } from './reclamations-traites-routing.module';
import { ReclamationsTraitesComponent } from './reclamations-traites.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReclamationsTraitesComponent
  ],
  imports: [
    CommonModule,
    ReclamationsTraitesRoutingModule,
    sharedModule
  ]
})
export class ReclamationsTraitesModule { }

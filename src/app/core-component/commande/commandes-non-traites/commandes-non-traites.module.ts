import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesNonTraitesRoutingModule } from './commandes-non-traites-routing.module';
import { CommandesNonTraitesComponent } from './commandes-non-traites.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommandesNonTraitesComponent
  ],
  imports: [
    CommonModule,
    CommandesNonTraitesRoutingModule,
    sharedModule
  ]
})
export class CommandesNonTraitesModule { }

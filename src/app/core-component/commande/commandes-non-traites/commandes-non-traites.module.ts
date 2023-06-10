import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesNonTraitesRoutingModule } from './commandes-non-traites-routing.module';
import { CommandesNonTraitesComponent } from './commandes-non-traites.component';


@NgModule({
  declarations: [
    CommandesNonTraitesComponent
  ],
  imports: [
    CommonModule,
    CommandesNonTraitesRoutingModule
  ]
})
export class CommandesNonTraitesModule { }

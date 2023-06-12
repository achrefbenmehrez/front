import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetoursTraitesRoutingModule } from './retours-traites-routing.module';
import { RetoursTraitesComponent } from './retours-traites.component';


@NgModule({
  declarations: [
    RetoursTraitesComponent
  ],
  imports: [
    CommonModule,
    RetoursTraitesRoutingModule
  ]
})
export class RetoursTraitesModule { }

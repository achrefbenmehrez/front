import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetoursATraiteRoutingModule } from './retours-atraite-routing.module';
import { RetoursATraiteComponent } from './retours-atraite.component';


@NgModule({
  declarations: [
    RetoursATraiteComponent
  ],
  imports: [
    CommonModule,
    RetoursATraiteRoutingModule
  ]
})
export class RetoursATraiteModule { }

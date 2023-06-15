import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    sharedModule
  ]
})
export class AnnonceModule { }

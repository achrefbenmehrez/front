import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeDiffusionRoutingModule } from './liste-diffusion-routing.module';
import { ListeDiffusionComponent } from './liste-diffusion.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListeDiffusionComponent
  ],
  imports: [
    CommonModule,
    ListeDiffusionRoutingModule,
    sharedModule
  ]
})
export class ListeDiffusionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterMessageRoutingModule } from './ajouter-message-routing.module';
import { AjouterMessageComponent } from './ajouter-message.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AjouterMessageComponent
  ],
  imports: [
    CommonModule,
    AjouterMessageRoutingModule,
    sharedModule
  ]
})
export class AjouterMessageModule { }

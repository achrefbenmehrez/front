import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifierMessageRoutingModule } from './modifier-message-routing.module';
import { ModifierMessageComponent } from './modifier-message.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ModifierMessageComponent
  ],
  imports: [
    CommonModule,
    ModifierMessageRoutingModule,
    sharedModule
  ]
})
export class ModifierMessageModule { }

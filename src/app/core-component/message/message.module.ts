import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    sharedModule
  ]
})
export class MessageModule { }

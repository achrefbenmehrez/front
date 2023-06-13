import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeMessagesRoutingModule } from './liste-messages-routing.module';
import { ListeMessagesComponent } from './liste-messages.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListeMessagesComponent
  ],
  imports: [
    CommonModule,
    ListeMessagesRoutingModule,
    sharedModule
  ]
})
export class ListeMessagesModule { }

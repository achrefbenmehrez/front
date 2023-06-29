import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnRoutingModule } from './return-routing.module';
import { ReturnComponent } from './return.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { ReturnDetailsComponent } from './return-details/return-details.component';

@NgModule({
  declarations: [ReturnComponent, ReturnDetailsComponent],
  imports: [CommonModule, ReturnRoutingModule, sharedModule],
})
export class ReturnModule {}

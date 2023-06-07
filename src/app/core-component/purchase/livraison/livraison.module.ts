import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';

import { livraisonRoutingModule } from './livraison-routing.module';
import { LivraisonComponent } from './livraison.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LivraisonComponent],
  imports: [
    CommonModule,
    livraisonRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [LivraisonComponent],
})
export class livraisonModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { CustomPaginationModule } from "../../shared/custom-pagination/custom-pagination.module";


@NgModule({
    declarations: [
        PurchaseComponent,
        
    ],
    imports: [
        CommonModule,
        PurchaseRoutingModule,
        CustomPaginationModule
    ]
})
export class PurchaseModule { }

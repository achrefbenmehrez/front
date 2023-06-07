import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportproductRoutingModule } from './importproduct-routing.module';
import { ImportproductComponent } from './importproduct.component';
import { CustomPaginationModule } from "../../../shared/custom-pagination/custom-pagination.module";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        ImportproductComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        ImportproductRoutingModule,
        CustomPaginationModule
    ]
})
export class ImportproductModule { }

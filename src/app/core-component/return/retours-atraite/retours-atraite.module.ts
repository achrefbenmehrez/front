import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetoursATraiteRoutingModule } from './retours-atraite-routing.module';
import { RetoursATraiteComponent } from './retours-atraite.component';
import { FormsModule } from '@angular/forms';
import { CustomPaginationModule } from "../../../shared/custom-pagination/custom-pagination.module";


@NgModule({
    declarations: [
        RetoursATraiteComponent
    ],
    imports: [
        CommonModule,
        RetoursATraiteRoutingModule,
        FormsModule,
        CustomPaginationModule
    ]
})
export class RetoursATraiteModule { }

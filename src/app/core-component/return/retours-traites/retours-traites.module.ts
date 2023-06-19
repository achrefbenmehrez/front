import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetoursTraitesRoutingModule } from './retours-traites-routing.module';
import { RetoursTraitesComponent } from './retours-traites.component';
import { FormsModule } from '@angular/forms';
import { CustomPaginationModule } from "../../../shared/custom-pagination/custom-pagination.module";


@NgModule({
    declarations: [
        RetoursTraitesComponent
    ],
    imports: [
        CommonModule,
        RetoursTraitesRoutingModule,
        FormsModule,
        CustomPaginationModule
    ]
})
export class RetoursTraitesModule { }

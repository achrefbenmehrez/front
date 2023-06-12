import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportCommandeRoutingModule } from './import-commande-routing.module';
import { ImportCommandeComponent } from './import-commande.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ImportCommandeComponent
  ],
  imports: [
    CommonModule,
    ImportCommandeRoutingModule,
    sharedModule
  ]
})
export class ImportCommandeModule { }

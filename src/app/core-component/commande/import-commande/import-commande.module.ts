import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportCommandeRoutingModule } from './import-commande-routing.module';
import { ImportCommandeComponent } from './import-commande.component';


@NgModule({
  declarations: [
    ImportCommandeComponent
  ],
  imports: [
    CommonModule,
    ImportCommandeRoutingModule
  ]
})
export class ImportCommandeModule { }

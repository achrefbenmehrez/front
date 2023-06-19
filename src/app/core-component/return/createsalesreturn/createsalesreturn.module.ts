import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreatesalesreturnRoutingModule } from './createsalesreturn-routing.module';
import { CreatesalesreturnComponent } from './createsalesreturn.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreatesalesreturnComponent],
  imports: [
    CommonModule,
    CreatesalesreturnRoutingModule,
    DatepickerModule,
    sharedModule,
    FormsModule,
    HttpClientModule
  ],
})
export class CreatesalesreturnModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdituserRoutingModule } from './edituser-routing.module';
import { EdituserComponent } from './edituser.component';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    EdituserComponent
  ],
  imports: [
    CommonModule,
    EdituserRoutingModule,
    FormsModule,NgxDropzoneModule
  ]
})
export class EdituserModule { }

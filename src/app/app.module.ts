import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layers } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { LoaderComponent } from './common-component/loader/loader.component';
import { sharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { RetoursATraiteModule } from './core-component/return/retours-atraite/retours-atraite.module';
import { RetoursTraitesModule } from './core-component/return/retours-traites/retours-traites.module';

const icons = {
  Layers,
};

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxDropzoneModule,
    
  ],
  exports: [FeatherModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

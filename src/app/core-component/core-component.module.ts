import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';

import { SidebarOneComponent } from '../common-component/sidebar-one/sidebar-one.component';
import { SidebarTwoComponent } from '../common-component/sidebar-two/sidebar-two.component';
import { SidebarThreeComponent } from '../common-component/sidebar-three/sidebar-three.component';
import { SidebarFourComponent } from '../common-component/sidebar-four/sidebar-four.component';
import { SidebarFiveComponent } from '../common-component/sidebar-five/sidebar-five.component';
import { HeaderComponent } from '../common-component/header/header.component';
import { LayoutComponent } from '../common-component/layout/layout.component';
import { sharedModule } from '../shared/shared.module';
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
@NgModule({
  declarations: [
    CoreComponentComponent,
    HeaderComponent,
    SidebarOneComponent,
    SidebarTwoComponent,
    SidebarThreeComponent,
    SidebarFourComponent,
    SidebarFiveComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    CoreComponentRoutingModule,
    sharedModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: () => ({
          allowedDomains: ['*'],
          tokenGetter: () => localStorage.getItem('token'),
          headerName: 'Authorization',
          authScheme: 'Bearer ',
          throwNoTokenError: true,
        }),
      },
    }),
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreComponentModule {}

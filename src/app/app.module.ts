import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';

import { PanelControlComponent } from 'src/app/pages/panel-control/panel-control.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { PanelControlModule } from 'src/app/pages/panel-control/panel-control.module';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelControlComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    PanelControlModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [

   { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

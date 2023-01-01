import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PanelControlComponent } from 'src/app/pages/panel-control/panel-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { RegisterComponent } from './pages/panel-control/register/register.component';
import { CalendarComponent } from './pages/panel-control/calendar/calendar.component';
import { ContractComponent } from 'src/app/pages/panel-control/contract/contract.component';
import { FormsComponent } from 'src/app/pages/panel-control/forms/forms.component';
import { HomeComponent } from 'src/app/pages/panel-control/home/home.component';
import { InformationComponent } from 'src/app/pages/panel-control/information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelControlComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [

   { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

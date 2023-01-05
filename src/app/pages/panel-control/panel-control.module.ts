import { SidebarComponent } from './../../shared/sidebar/sidebar.component';
import { AppModule } from './../../app.module';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { CalendarComponent } from 'src/app/pages/panel-control/calendar/calendar.component';
import { ContractComponent } from 'src/app/pages/panel-control/contract/contract.component';
import { FormsComponent } from 'src/app/pages/panel-control/forms/forms.component';
import { HomeComponent } from 'src/app/pages/panel-control/home/home.component';
import { InformationComponent } from 'src/app/pages/panel-control/information/information.component';
import { RegisterComponent } from 'src/app/pages/panel-control/register/register.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    ContractComponent,
    InformationComponent,
    RegisterComponent,
    FormsComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelControlModule { }

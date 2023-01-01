import { PanelControlComponent } from 'src/app/pages/panel-control/panel-control.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../services/auth-guard/auth-guard.service';
import { ContractComponent } from 'src/app/pages/panel-control/contract/contract.component';
import { FormsComponent } from 'src/app/pages/panel-control/forms/forms.component';
import { InformationComponent } from 'src/app/pages/panel-control/information/information.component';
import { CalendarComponent } from 'src/app/pages/panel-control/calendar/calendar.component';
import { RegisterComponent } from 'src/app/pages/panel-control/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PanelControlComponent,
    children: [
      {
        path: 'contracts',
        component: ContractComponent

      },
      {
        path: 'calendar',
        component: CalendarComponent

      },
      {
        path: 'forms',
        component: FormsComponent

      },
      {
        path: 'information',
        component: InformationComponent

      },
      {
        path: 'register',
        component: RegisterComponent

      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlPanelRoutingModule {}

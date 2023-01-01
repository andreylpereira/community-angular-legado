import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { PanelControlComponent } from 'src/app/pages/panel-control/panel-control.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/control-panel', pathMatch: 'full' },
  {
    path: 'control-panel',
    component: PanelControlComponent,
    //anActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
  {
    path: 'control-panel',
    loadChildren: () =>
      import('./pages/panel-control/control-panel-routing').then(
        (a) => a.ControlPanelRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

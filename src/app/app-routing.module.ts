import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { TechnicalComponent } from './technical/technical.component';
import { DeveloperComponent } from './developer/developer.component';
import {FormApplComponent} from './form-appl/form-appl.component';
import { TechFormComponent } from './tech-form/tech-form.component';
import { ViewapplicantComponent } from './viewapplicant/viewapplicant.component';
import { DevformComponent } from './devform/devform.component';
import { AuthGuard } from './auth.guard';
import { ViewtechComponent } from './viewtech/viewtech.component';
import { ViewdevComponent } from './viewdev/viewdev.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'applicant', component: ApplicantComponent, canActivate: [AuthGuard]},
  { path: 'technical', component: TechnicalComponent, canActivate: [AuthGuard]},
  { path: 'developer', component: DeveloperComponent, canActivate: [AuthGuard]},
  { path: 'form-appl', component: FormApplComponent, canActivate: [AuthGuard]},
  { path: 'tech-form', component: TechFormComponent, canActivate: [AuthGuard]},
  { path: 'viewapplicant', component: ViewapplicantComponent, canActivate: [AuthGuard]},
  { path: 'devform', component: DevformComponent, canActivate: [AuthGuard]},
  { path: 'viewtech', component: ViewtechComponent, canActivate:[AuthGuard]},
  { path: 'viewdev', component: ViewdevComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

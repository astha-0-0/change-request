import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { TechnicalComponent } from './technical/technical.component';
import { DeveloperComponent } from './developer/developer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormApplComponent } from './form-appl/form-appl.component';
import { TechFormComponent } from './tech-form/tech-form.component';
import { ViewapplicantComponent } from './viewapplicant/viewapplicant.component';
import { DevformComponent } from './devform/devform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewtechComponent } from './viewtech/viewtech.component';
import { ViewdevComponent } from './viewdev/viewdev.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FailmsgComponent } from './failmsg/failmsg.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicantComponent,
    TechnicalComponent,
    DeveloperComponent,
    FormApplComponent,
    TechFormComponent,
    ViewapplicantComponent,
    DevformComponent,
    NavbarComponent,
    SuccessDialogComponent,
    ViewtechComponent,
    ViewdevComponent,
    FailmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

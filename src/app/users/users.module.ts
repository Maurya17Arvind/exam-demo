import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  exports: [ChangePasswordComponent]
})
export class UsersModule { }

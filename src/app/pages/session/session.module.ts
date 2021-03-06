import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SessionRoutes } from 'src/app/config/routes/session.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, GetStartedComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
  ]
})
export class SessionModule { }

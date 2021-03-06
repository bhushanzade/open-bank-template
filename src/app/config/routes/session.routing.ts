import { Routes } from "@angular/router";
import { GetStartedComponent } from "src/app/pages/session/get-started/get-started.component";
import { LoginComponent } from "src/app/pages/session/login/login.component";
import { SignUpComponent } from "src/app/pages/session/sign-up/sign-up.component";

export const SessionRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'getstarted',
        component: GetStartedComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent,
    }
]
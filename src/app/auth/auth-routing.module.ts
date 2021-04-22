import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';


const routes: Routes = [
  
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'signup',
        component: SignUpComponent,
        // canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'verifyuser',
        component: VerifyUserComponent,
      },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/login/auth.guard';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthenticationComponent } from './layouts/authentication/authentication/authentication.component';
import { HomeComponent } from './layouts/home/home.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'',
    component:AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

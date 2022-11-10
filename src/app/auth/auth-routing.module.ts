import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from '../nopage-found/nopage-found.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component';
import { LoginGuard } from './login/guards/login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  //{ path: 'login', component: LoginComponent},
  { path: '', component: PagesComponent},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
    { path: '**', component: NopageFoundComponent },
];


@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

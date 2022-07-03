import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/account/components/login/login.component';
import { RegisterOrganizationDetailsComponent } from './core/account/components/register/register-organization/register-organization-details/register-organization-details.component';
import { RegisterOrganizationComponent } from './core/account/components/register/register-organization/register-organization.component';
import { RegisterPersonalDetailsComponent } from './core/account/components/register/register-personal/register-personal-details/register-personal-details.component';
import { RegisterPersonalComponent } from './core/account/components/register/register-personal/register-personal.component';
import { RegisterComponent } from './core/account/components/register/register.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'account',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        children: [
          {
            path: 'personal',
            component: RegisterPersonalComponent,
            children: [
              {
                path: 'details',
                component: RegisterPersonalDetailsComponent,
              },
            ],
          },
          {
            path: 'organization',
            component: RegisterOrganizationComponent,
            children: [
              {
                path: 'details',
                component: RegisterOrganizationDetailsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

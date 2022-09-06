import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerCrudComponent } from './views/employer-crud/employer-crud.component';
import { EmployerReadComponent } from './componentes/employer/employer-read/employer-read.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { SignupScreenComponent } from './views/signup-screen/signup-screen.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { EmployerCreateComponent } from './componentes/employer/employer-create/employer-create.component';
import { EmployerUpdateComponent } from './componentes/employer/employer-update/employer-update.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    {
      path: "",
      component: LoginScreenComponent
    },
    {
      path: "signup",
      component: SignupScreenComponent
    },
    {
      path: "home",
      component: HomeComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "employers",
      component: EmployerCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "employers/create",
      component: EmployerCreateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "employers/update/:id",
      component: EmployerUpdateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "employers/:id",
      component: EmployerCrudComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

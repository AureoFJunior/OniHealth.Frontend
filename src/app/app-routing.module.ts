import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployerCrudComponent } from './views/employer-crud/employer-crud.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { SignupScreenComponent } from './views/signup-screen/signup-screen.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { EmployerCreateComponent } from './componentes/employer/employer-create/employer-create.component';
import { EmployerUpdateComponent } from './componentes/employer/employer-update/employer-update.component';
import { CustomerCrudComponent } from "./views/customer-crud/customer-crud.component";
import { CustomerCreateComponent } from "./componentes/customer/customer-create/customer-create.component";
import { CustomerUpdateComponent } from "./componentes/customer/customer-update/customer-update.component";
import { HomeComponent } from './views/home/home.component';
import { RolesCrudComponent } from './views/roles-crud/roles-crud.component';
import { RolesCreateComponent } from './componentes/roles/roles-create/roles-create.component';
import { RolesUpdateComponent } from './componentes/roles/roles-update/roles-update.component';
import { PlanCrudComponent } from './views/plans-crud/plans-crud.component';
import { PlanCreateComponent } from './componentes/signedPlan/plans-create/plans-create.component';
import { PlanUpdateComponent } from './componentes/signedPlan/plans-update/plans-update.component';
import { UserReadComponent } from './componentes/user/user-read/user-read.component';

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
    },
    {
      path:"customers",
      component: CustomerCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path:"customers/create",
      component: CustomerCreateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path:"customers/update/:id",
      component: CustomerUpdateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path:"customers/:id",
      component: CustomerCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "roles",
      component: RolesCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "roles/create",
      component: RolesCreateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "roles/update/:id",
      component: RolesUpdateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "roles/:id",
      component: RolesCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "plans",
      component: PlanCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "plans/create",
      component: PlanCreateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "plans/update/:id",
      component: PlanUpdateComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "plans/:id",
      component: PlanCrudComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: "user",
      component: UserReadComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

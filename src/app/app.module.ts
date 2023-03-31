import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { NativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './componentes/templates/footer/footer.component';
import { NavComponent } from './componentes/templates/nav/nav.component';

import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { SignupScreenComponent } from './views/signup-screen/signup-screen.component';

import { EmployerCrudComponent } from './views/employer-crud/employer-crud.component'
import { EmployerCreateComponent } from './componentes/employer/employer-create/employer-create.component';
import { EmployerUpdateComponent } from './componentes/employer/employer-update/employer-update.component';
import { EmployerReadComponent } from './componentes/employer/employer-read/employer-read.component';

import { CustomerCrudComponent } from "./views/customer-crud/customer-crud.component";
import { CustomerCreateComponent } from "./componentes/customer/customer-create/customer-create.component";
import { CustomerUpdateComponent } from "./componentes/customer/customer-update/customer-update.component";
import { CustomerReadComponent } from "./componentes/customer/customer-read/customer-read.component";

import { RolesCrudComponent } from './views/roles-crud/roles-crud.component'
import { RolesCreateComponent } from './componentes/roles/roles-create/roles-create.component';
import { RolesUpdateComponent } from './componentes/roles/roles-update/roles-update.component';
import { RolesReadComponent } from './componentes/roles/roles-read/roles-read.component';

import { PlanCrudComponent } from './views/plans-crud/plans-crud.component';
import { PlanCreateComponent } from './componentes/signedPlan/plans-create/plans-create.component';
import { PlanUpdateComponent } from './componentes/signedPlan/plans-update/plans-update.component';
import { PlanReadComponent } from './componentes/signedPlan/plans-read/plans-read.component';

import { UserReadComponent } from './componentes/user/user-read/user-read.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';

import { UserService } from './componentes/user/user.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { MatSelectModule } from '@angular/material/select';

import { EditAvatarDialogComponentComponent } from './componentes/EditAvatarDialogComponent/EditAvatarDialogComponent.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ThemeService } from '../app/services/theme/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EmployerCrudComponent,
    EmployerCreateComponent,
    EmployerUpdateComponent,
    EmployerReadComponent,
    RolesCrudComponent,
    RolesCreateComponent,
    RolesUpdateComponent,
    RolesReadComponent,
    CustomerCrudComponent,
    CustomerCreateComponent,
    CustomerReadComponent,
    CustomerUpdateComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    PlanCreateComponent,
    PlanCrudComponent,
    PlanReadComponent,
    PlanUpdateComponent,
    UserReadComponent,
    UserCrudComponent,
    EditAvatarDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    NgImageSliderModule,
    MatSelectModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  providers: [UserService, AuthGuardService, DatePipe, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

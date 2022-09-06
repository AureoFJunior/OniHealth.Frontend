import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatRadioModule} from '@angular/material/radio';
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

import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './componentes/templates/footer/footer.component';
import { NavComponent } from './componentes/templates/nav/nav.component';

import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { SignupScreenComponent } from './views/signup-screen/signup-screen.component';

import { EmployerCrudComponent } from './views/employer-crud/employer-crud.component'
import { EmployerCreateComponent } from './componentes/employer/employer-create/employer-create.component';
import { EmployerUpdateComponent } from './componentes/employer/employer-update/employer-update.component';
import { EmployerReadComponent } from './componentes/employer/employer-read/employer-read.component';
import { UserService } from './componentes/user/user.service';
import { AuthGuardService } from './services/guard/auth-guard.service';

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
    LoginScreenComponent,
    SignupScreenComponent
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
    NgxMaskModule.forRoot()
  ],
  providers: [UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

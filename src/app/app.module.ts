import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { SignupModule } from './Signup/signup.module';
import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './Signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // EmployeeDashboardComponent
    // LoginComponent,
    // SignupComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  LoginModule,
  SignupModule,
  NgToastModule,
  // HomeModule,
  // EmployeeDashboardComponent
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

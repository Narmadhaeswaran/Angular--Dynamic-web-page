import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './Signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = 
[
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
path:'signup',component:SignupComponent
  },
{
  path:'home',component:HomeComponent
}
]
  
  
//   { path: ' ', loadChildren: () => import('./Signup/signup.module').then(m => m.SignupModule) }, 


// { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

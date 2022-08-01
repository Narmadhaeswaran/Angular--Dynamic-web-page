import { Component ,OnInit} from '@angular/core';

import{FormGroup,FormBuilder}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router}from '@angular/router'
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
 


 constructor(private formbuilder:FormBuilder, private http:HttpClient,
   private router:Router,private toast:NgToastService){ } 


ngOnInit():void {
  this.loginForm=this.formbuilder.group({
    email:[''],
    password:['']
  });
}


 

// onSubmit(){
//   this.submitted=true;
//   if(this.loginform.valid){
//     alert("Form Submitted Successfully")
//     console.table(this.loginform.value);
//   }
// }


 login(){
  this.http.get<any>("http://localhost:3000/signupUsers")
 .subscribe(res=>{
   const user=res.find((a:any)=>{
     return a.email===this.loginForm.value.email &&   
     a.password===this.loginForm.value.password ;
 
   });
   
   if(user){
     alert("Login success!!!");
     this.toast.success({detail:"Success Message",summary:"Login successful",duration:5000})
     this.loginForm.reset();
     this.router.navigate(['home'])
   }else{
     alert("User not found!!!");
   }
 
})
 }
}
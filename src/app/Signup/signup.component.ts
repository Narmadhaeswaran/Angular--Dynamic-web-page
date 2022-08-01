import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder}from '@angular/forms';
import{HttpClient}from '@angular/common/http';
import{Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
   public signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:  HttpClient,
     private router:Router,private toast:NgToastService ){

  }
      
     ngOnInit():void{
       this.signupForm=this.formBuilder.group({
        firstname:[''],
        lastname:[''],
        email:[''],
        password:[''],
        mobile:['']
       })
     }


    //  get signupformControls(){
    //    return this.signupForm.controls;
    //  }



     signUp(){
        this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
        .subscribe(res=>{
          alert("SignUp Successfully");
          this.toast.success({detail:"Success Message",summary:"SignUp successful",duration:5000})
          this.signupForm.reset();
          this.router.navigate(['login']);
        })
       
     }
}

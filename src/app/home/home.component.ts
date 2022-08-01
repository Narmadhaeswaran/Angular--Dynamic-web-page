import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { HomeModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  formValue !: FormGroup;
homeModelObj:HomeModel=new HomeModel();
 employeeData !: any;
  showAdd !:boolean;
  showUpdate !: boolean;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
postEmployeeDetails(){

  this.homeModelObj.firstName=this.formValue.value.firstName;
  this.homeModelObj.lastName=this.formValue.value.lastName;
  
  this.homeModelObj.email=this.formValue.value.email;
  this.homeModelObj.mobile=this.formValue.value.mobile;
  
  this.homeModelObj.salary=this.formValue.value.salary;
  
  this.api.postEmployee(this.homeModelObj)
  .subscribe((res: any)=>{
    console.log(res);
    alert("Employee Added Succcessfully")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  })
}
getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData=res;
  })
}
deleteEmployee(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}

onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.homeModelObj.id=row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);

}
updateEmployeeDetails(){
  this.homeModelObj.firstName=this.formValue.value.firstName;
  this.homeModelObj.lastName=this.formValue.value.lastName;
  
  this.homeModelObj.email=this.formValue.value.email;
  this.homeModelObj.mobile=this.formValue.value.mobile;
  
  this.homeModelObj.salary=this.formValue.value.salary;

  this.api.updateEmployee(this.homeModelObj,this.homeModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully!!!")
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
  })

}
}

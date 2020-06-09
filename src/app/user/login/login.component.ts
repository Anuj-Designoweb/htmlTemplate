import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchdataService } from '../../fetchdata.service';

import {  FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[FetchdataService]
})
export class LoginComponent implements OnInit {
email:String;
password:String;
results:String;


  constructor(private router:Router,private saveData:FetchdataService,private formBuilder:FormBuilder) { }
  profileForm: FormGroup;
  //contactForm:formGroup;
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [ Validators.required,Validators.minLength(6)]],
      password: ['',[ Validators.required,Validators.minLength(6)]]
    })
  }
  Register(){
    this.router.navigateByUrl('Register');
}
getData() {
  this.router.navigateByUrl('Dashboard');
}

userList() {
  this.router.navigateByUrl("lists")
}
login() {
  if (this.profileForm.valid) {
    var req = {
      "email": this.profileForm.value.email,
      "password": this.profileForm.value.password,
    }
    this.saveData.login(req).subscribe((res:any) => {
      if (res) {
      //   alert(JSON.stringify(res));
         console.log(res.userdetails.email)
       // alert(res.responseMessage);
        // this.toastr.success(res.responseMessage);
        this.router.navigateByUrl("dashboard");
       localStorage.setItem('token', (res));
       localStorage.setItem('email', (res.userdetails.email));
       localStorage.setItem('firstName', (res.userdetails.firstName));
       localStorage.setItem('lastName', (res.userdetails.lastName
        ));
     //  this.router.navigateByUrl("dashboard");
      } else {
        alert("error occurs")
      }
    }, (err) => {
    
      alert("null");
    })
  }

}
  

  
  
//  console.log(this.email)
//   if (this.saveData.login(this.email,this.password)//(((this.email!='')||(this.email!=undefined) && (this.password!=''|| this.password!=undefined)))
//   {
//     //this.saveData.login(this.email,this.password) 
//    this.router.navigateByUrl('Dashboard');
//    console.log("true")
//   }
//   else {
//     console.log("false")
//     this.results = "failed"
//   }
  


}

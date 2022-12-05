import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3 execute
  //class collection of properties((varibles) and functions
  //function /methods-user defined functions (4 th execute)
  aim = "Your Perfect Banking Partner"
  account = "Enter your Account Here"
  acno = "";
  pswd = "";
  //dependency injection
  constructor( private fb: FormBuilder,private ds:DataService,private router:Router) { //1st execute
    //it automatically invokes when the object is created
    //object intaialization
  }
  logForm = this.fb.group({//group
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%*()]*')]],
  })


  ngOnInit(): void {//2 execute
    //its a lifecycle hook of angular
    //when the component is created at same time it will intialize or authorized
  }
  acnochange(event: any) {
    console.log(event);
    this.acno = event.target.value;
    console.log(this.acno)
  }
  pswdchange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd)
  }
  login() {
    var acno = this.logForm.value.acno;
    var pswd = this.logForm.value.pswd;
    var userDetails = this.ds.userDetails;
    const result = this.ds.login(acno,pswd)
    if(result){
      alert('Log in Successfull')
      this.router.navigateByUrl('dashboard')

    }else{
      alert("Log in Failed")
    }
    // if (acno in userDetails) {
    //   if (pswd == userDetails[acno]['password']) {
    //     alert('Log in Successfull')
    //     this.router.navigateByUrl('dashboard')
    //   } else {
    //     alert('Invalid Password')
    //   }
    // } else {
    //   alert('Invalid User Details')
    // }
  }
  // login(a:any,p:any) {
  //   var acno = a.value;
  //   var pswd = p.value;
  //   var userDetails = this.userDetails;
  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {
  //       alert('log in successfull')
  //     } else {
  //       alert('invalid password')
  //     }
  //   } else {
  //     alert('invalid user details')
  //   }
  // }


}

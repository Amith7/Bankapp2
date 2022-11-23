import { Component, OnInit } from '@angular/core';

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
  //database
  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 1000, balance: 1000 },
    1001: { acno: 1001, username: "amala", password: 1001, balance: 1000 },
    1002: { acno: 1002, username: "vimal", password: 1002, balance: 1000 },
  }
  constructor() { //1st execute
    //it automatically invokes when the object is created
    //object intaialization
  }

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
  // login() {
  //   var acno = this.acno;
  //   var pswd = this.pswd;
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
  login(a:any,p:any) {
    var acno = a.value;
    var pswd = p.value;
    var userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        alert('log in successfull')
      } else {
        alert('invalid password')
      }
    } else {
      alert('invalid user details')
    }
  }


}

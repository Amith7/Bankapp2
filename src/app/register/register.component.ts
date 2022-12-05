import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno = "";
  pswd = "";
  uname = ""

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }
  //register model
  registerForm = this.fb.group({//group
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%*()]*')]],
  })
  //control pass to ts to html file

  ngOnInit(): void {
  }
  register() {
    console.log(this.registerForm)
    console.log(this.registerForm.get('uname')?.errors);//valid or Not
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    if (this.registerForm.valid) {
    const result = this.ds.register(acno, uname, pswd);
    if (result) {
      alert("registered Succesfull");
      this.router.navigateByUrl('')
    } else {
      alert("User already registered")
      this.router.navigateByUrl('register')

    }
    } else {
    alert("Invalid Form")
    }
  }
}

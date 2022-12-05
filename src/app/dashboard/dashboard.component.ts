import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //deposite properties
  acno = "";
  pswd = "";
  amount = "";
  //withdraw properties
  acno1 = "";
  pswd1 = "";
  amount1 = "";

  //curentuser
  user = "";
  //date 
  sdate:any;

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {
    this.user = this.ds.currentuser;
    this.sdate=new Date()
  }
  logForm = this.fb.group({//group
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%*()]*')]],
  })
  widForm = this.fb.group({//group
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$%*()]*')]],
  })



  ngOnInit(): void {
    if (!localStorage.getItem('CurrentAccno')) {
      alert('Please Login First')
      this.router.navigateByUrl('')
    }
  }
  deposite() {
    var acno = this.logForm.value.acno;
    var pswd = this.logForm.value.pswd;
    var amount = this.logForm.value.amount;

    const result = this.ds.deposite(acno, pswd, amount)

    if (result) {
      alert(`${amount} is credicted....Balance is:${result}`)
    }


  }
  Withdraw() {
    var acno = this.widForm.value.acno1;
    var pswd = this.widForm.value.pswd1;
    var amount = this.widForm.value.amount1;

    const result = this.ds.withdraw(acno, pswd, amount)

    if (result) {
      alert(`${amount} is debited....balance is${result}`)
    }

  }
  logout() {
    alert("Log out")
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('CurrentAccno')
    this.router.navigateByUrl('')
  }
delete(){
  // alert("clicked")
  this.acno=JSON.parse(localStorage.getItem('CurrentAccno')||'')
}
onCancel(){
  this.acno="";
}
}

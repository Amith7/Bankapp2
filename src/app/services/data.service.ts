import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //current user
  currentuser = "";
  //curent Account no
  currentAcno="";



  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 1000, balance: 1000, transaction: [] },
    1001: { acno: 1001, username: "amala", password: 1001, balance: 1000, transaction: [] },
    1002: { acno: 1002, username: "vimal", password: 1002, balance: 1000, transaction: [] },
  }
  // parameters datatype mention
  register(acno: any, username: any, password: any) {
    //reference
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      return false;
    } else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction: []
      }
      console.log(userDetails);
      return true
    }
  }
  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentuser = userDetails[acno]['username']
        this.currentAcno = acno;
        return true;
      } else {
        return false
      }

    } else {
      return false

    }
  }
  deposite(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount;
        userDetails[acno]['transaction'].push({
          Type: 'credit',
          Amount: amount
        })
        console.log(userDetails);
        return userDetails[acno]['balance']
      } else {
        alert("password missmatch")
        return false;
      }
    } else {
      alert('invalid date')
      return false;
    }

  }
  withdraw(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {

        if (userDetails[acno]['balance'] > amount) {
          userDetails[acno]['balance'] -= amount;
          userDetails[acno]['transaction'].push({
            Type: 'debit',
            Amount: amount
          })

          return userDetails[acno]['balance']
        }
        else {
          alert("Transaction failed");
          return false;
        }
      }
      else {
        alert("password missmatch")
        return false;
      }
    }
    else {
      alert('invalid Date')
      return false;
    }

  }

  getTransaction(acno: any) {
     return this.userDetails[acno]['transaction']//details of transaction
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner";

  acno="enter you account no";

  pswd=""

  accountDetails:any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}

  constructor() { }

  ngOnInit(): void {
  }


// accnoChange(event:any) {
//   this.accno=event.target.value;
//   console.log(this.accno);  
// }


// pswdChange(event:any) {
//   this.pswd=event.target.value;
//   console.log(this.pswd);
// }



  login(a:any,p:any) {

    //console.log(a);
    //alert("Login Clicked")
    var acno = a.value;
    var pswd = p.value;
    let users = this.accountDetails;

    if (acno in users) {
      if (pswd == users[acno]["password"]) {
          alert("Login Succesful");
      }
      else {
          alert("Inncorrect Password");
      }

  }
  else {
      alert("Invalid Account");
  }

  }

}
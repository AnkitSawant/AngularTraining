import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  

  constructor(private router: Router, private csvc: CustomerService) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.email == 'admin@admin.com' && this.password == 'admin'){
      console.log("check login.")
      this.csvc.logstatus = true;
      this.router.navigate(['/about']);
    }
    else{
      alert("email and password invalid.");
    }
  }

}

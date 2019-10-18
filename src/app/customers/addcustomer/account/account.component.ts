import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { ElementAst, ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private fname: string;
  private lname: string;
  private gender: string;
  

  

  constructor(private router : Router, private csvc : CustomerService) {
     
   }

  ngOnInit() {
    this.fname = this.csvc.fname;
    this.lname = this.csvc.lname;
    this.gender = this.csvc.gender;
  }

  next(){
    
    this.csvc.fname = this.fname;
    this.csvc.lname = this.lname;
    this.csvc.gender = this.gender;
    this.router.navigate(['/customers/addCustomer/profile']);

  }

}

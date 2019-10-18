import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private address: string;
  private city: string;
  private state: string;

  constructor(private router: Router, private csvc: CustomerService) { }

  ngOnInit() {
    this.address = this.csvc.address;
    this.city = this.csvc.city;
    this.state = this.csvc.state;
  }

  previous(){
    this.csvc.address = this.address;
    this.csvc.city = this.city;
    this.csvc.state = this.state;
    this.router.navigate(['/customers/addCustomer/account']);
  }

  next(){
    this.csvc.address = this.address;
    this.csvc.city = this.city;
    this.csvc.state = this.state;
    this.router.navigate(['/customers/addCustomer/finish']);
  }
}

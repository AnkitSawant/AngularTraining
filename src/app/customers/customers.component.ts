import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

gridView: Boolean = true;
customers: any;
  constructor(private csvc : CustomerService, private router: Router) {
    this.csvc.GetAllCustomersAsync().subscribe( data => {
      this.customers = data;
    });
   }

  ngOnInit() {
  }

  ViewType(): void{
    this.gridView = !this.gridView;
  }

  edit(customerid: number){
    this.router.navigate(['/editcustomer',customerid]);
  }

} 

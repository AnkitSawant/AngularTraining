import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  private email: string;

  constructor(private csvc: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.csvc.email = this.email;
    this.csvc.AddCustomersAsync().subscribe(data => {
      console.log(data);
    });
    console.log("added");
    this.router.navigate(['/customers']);
  }

  previous(){
    this.csvc.email = this.email;
    this.router.navigate(['/customers/addCustomer/profile'])
  }

}

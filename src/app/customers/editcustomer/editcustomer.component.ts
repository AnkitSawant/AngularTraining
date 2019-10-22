import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  @Input()
  private customerid: number;
  private customer: any;

  constructor(private csvc: CustomerService, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe( params => {
      this.customerid = parseInt(params['id']);
      this.csvc.GetCustomersByIdAsync(this.customerid).subscribe(data => {
        this.customer = data;
        //console.log(this.customer.Name);

      })

    });

   }

  ngOnInit() {
  }

  edit(){
    this.csvc.EditCustomersAsync(this.customer).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/customers']);
  }

  cancel(){
    this.router.navigate(['/customers']);
  }

}

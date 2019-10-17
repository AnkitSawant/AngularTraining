import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private status:boolean =this.csvc.logstatus;
  title = 'customermanagement';

  
  constructor(private csvc: CustomerService){
    
  }

 
}

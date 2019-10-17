import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  logstatus; boolean;
  constructor(private http : HttpClient) { 
    this.logstatus = false;
  }

  GetAllCustomersAsync(): Observable<any>{
    return this.http.get('http://localhost:8080/SpringRest/customers');
  }

  GetCustomersByIdAsync(customerId: number): Observable<any>{
    return this.http.get('http://localhost:8080/SpringRest/customer?id='+customerId);
  }

  EditCustomersAsync(customer: any): Observable<any>{
    return this.http.put('http://localhost:8080/SpringRest/editcustomer',customer);
  }

  AddCustomersAsync(customer: any) :Observable<any>{
    return this.http.post('http://localhost:8080/SpringRest/addcustomer',customer);
  }

  DeleteCustomersAsync(customerId: number) :Observable<any>{
    return this.http.delete('http://localhost:8080/SpringRest/deletecustomer?id='+customerId);
  }
}

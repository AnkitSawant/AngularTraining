import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  private operand1: any;
  private operand2: any;
  private currency: string;
  private paisa: number = 100;
  

  private ob: Observable<string> = new Observable<string>(function (source) {

    setTimeout(function () {
      console.log("Observing");
      source.next("Hello");
    }, 6000);

    setTimeout(function () {

      source.next("Aditya");
    }, 10000);
  });

  private adderObservable: Observable<number> = new Observable<number>(source => {

    console.log("adder observable");

    setTimeout(() => {
      source.next(parseInt(this.operand1) + parseInt(this.operand2));
    }, 5000);
      
  });

  constructor() { }

  ngOnInit() {
  }

  SubcribeToObsrevable() {
    this.ob.subscribe(function (data) {
      console.log("Received " + data);

    });

  }

  private Add(n1: number, n2: number): Observable<number> {

    return this.adderObservable;
  }

  performAdd() {
    let result = this.Add(this.operand1, this.operand2);
    result.subscribe(function (data) {
      console.log("result is " + data);
    })
  }

}

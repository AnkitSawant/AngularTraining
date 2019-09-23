import { Component, OnInit } from '@angular/core';
import {allbooks} from '../BookRepository';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit
{
  private books:any[] = allbooks;
  private showbooks:boolean = false;

  constructor() { }

  Show():void
  {
    this.showbooks = true;
  }
  Hide():void
  {
    this.showbooks = false;
  }



  ngOnInit() {
  }

}

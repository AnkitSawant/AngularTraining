import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import {allbooks} from '../BookRepository';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  searchbookid:number;

  result:any;

  @Output()
  errorevent:EventEmitter<string> = new EventEmitter<string>();

  constructor()
  {
    //console.log("CONSTRUCTOR: book id from parent is: ", this.searchbookid);
  }

  ngOnInit()
  {
    //console.log("ngOnInit: book id from parent is: ", this.searchbookid);
  }
  ngOnChanges() {
    console.log("ngOnChanges: book id from parent is: ", this.searchbookid);

    if (this.searchbookid) {
      this.result = allbooks.find(b => b.bookid == this.searchbookid);

      if (!this.result) {
        this.errorevent.emit("Book not found!");
      }
      else {
        this.errorevent.emit(" ");
      }
    }
    else {
      this.result = null;
    }
  }
}

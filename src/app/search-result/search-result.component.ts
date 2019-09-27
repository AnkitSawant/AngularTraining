import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
//import {allbooks} from '../BookRepository';
import {BooksService} from '../books.service';

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

  constructor(private booksvc: BooksService)
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
      //this.result = this.booksvc.GetBookById(this.searchbookid);
      this.result = undefined;
      this.booksvc.GetBookByIdAsync(this.searchbookid).subscribe(data => {
        this.result = data;
        //console.log(data);
        //this.emitError();
               
      }, (error)=>{ this.errorevent.emit("Book not found!"); })
      
      /*if (!this.result) {
        console.log(this.result);
        this.errorevent.emit("Book not found!");
      }
      else {
        this.errorevent.emit(" ");
      }*/
    }
    else {
      this.result = undefined;
      this.errorevent.emit(" ");
    }
    
  }
  
  // emitError(){
  //   if (this.result == 'Book with id: '+this.searchbookid+' not found') {
  //     console.log("In emit error  ");
  //     this.errorevent.emit("Book not found!");
  //   }
  //   else {
  //     this.errorevent.emit(" ");
  //   }
  // }
}

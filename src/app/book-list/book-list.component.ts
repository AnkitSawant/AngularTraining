import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit
{
  private books:any[];
  private showbooks:boolean = false;

  @Output()
  bookid:EventEmitter<number> = new EventEmitter<number>();

  constructor(private booksvc: BooksService) { 
    this.books = this.booksvc.GetAllBooks();
  }

  Show():void
  {
    this.showbooks = true;
  }
  Hide():void
  {
    this.showbooks = false;
  }

  setBookId(bookid: number): void{
    this.bookid.emit(bookid);
  }

  deleteBook(bookid: number): void{
    this.booksvc.DeleteBook(bookid);
  }
  
  ngOnInit() {
  }

}

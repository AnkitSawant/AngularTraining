import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BooksService} from '../books.service';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit
{
  private currency: string = "INR";
  private books:any[];
  private showbooks:boolean = false;

  @Output()
  bookid:EventEmitter<number> = new EventEmitter<number>();

  constructor(private booksvc: BooksService, private router: Router) { 
    //this.books = this.booksvc.GetAllBooks();
    this.booksvc.GetAllBooksAsync().subscribe( data => {
      this.books = data;
    });

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
    console.log(bookid);
    //this.bookid.emit(bookid);
    this.router.navigate(['/editbook',bookid]);
  }

  deleteBook(bookid: number): void{
    this.booksvc.DeleteBookAsync(bookid).subscribe(data=>{
      alert(data);
    });
    this.booksvc.GetAllBooksAsync().subscribe( data => {
      this.books = data;
    });
    
  }
  
  ngOnInit() {
  }

}

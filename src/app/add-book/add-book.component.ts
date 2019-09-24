import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private bookid:number;
  private bookname:string;
  private publisher:string;
  private price:number;
  private thumbnail:string;
  private thumbarray: string[];

  constructor(private svc: BooksService) { }

  AddBook()
  {
    let bookobject = {
      bookid: this.bookid,
      bookname: this.bookname,
      publisher: this.publisher,
      price: this.price,
      thumbnail: this.thumbnail
    };

    bookobject.thumbnail = this.svc.changePath(bookobject.thumbnail);
    
    if(this.svc.ValidateThumbnailFileExtension(bookobject.thumbnail)){
      let result = this.svc.AddBook(bookobject);
      alert(result);
    }
    else{
      alert("Image must be in jpeg format");
    }
    //validate the thumbnail extension
    
  }

  ngOnInit() {
  }

}

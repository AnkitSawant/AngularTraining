import { Component, OnInit, ViewChild } from '@angular/core';
import {BooksService} from '../books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @ViewChild('addForm', {static: true}) public createaddform: NgForm;
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
      BookId: this.bookid,
      Name: this.bookname,
      Publisher: this.publisher,
      Price: this.price,
      Thumbnail: this.thumbnail
    };

    bookobject.Thumbnail = this.svc.changePath(bookobject.Thumbnail);
    
    if(this.svc.ValidateThumbnailFileExtension(bookobject.Thumbnail)){
      let result = this.svc.AddBookAsync(bookobject);
      result.subscribe(data => {
        alert(data);
      }, (error) => {
        alert("Book with id "+bookobject.BookId+" exists.");
      });
      
    }
    else{
      alert("Image must be in jpeg format");
    }
    //validate the thumbnail extension
    
  }

  ngOnInit() {
  }

}

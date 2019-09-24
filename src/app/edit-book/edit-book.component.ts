import { Component, OnInit, Input } from '@angular/core';
import {BooksService} from '../books.service'

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input()
  private bookid: number;

  private book: any;
  private thumbnail: string;
 

  constructor(private booksvc: BooksService) {
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.book = this.booksvc.GetBookById(this.bookid);
  }

  EditBook(){
    this.book.thumbnail = this.booksvc.changePath(this.thumbnail);
    if(this.booksvc.ValidateThumbnailFileExtension(this.book.thumbnail)){
      let result = this.booksvc.EditBook(this.book);
      alert(result);
    }
    else{
      alert("Image must be in jpeg format");
    }
    
  }

  cancel(){
    this.book = undefined;
  }

  

}

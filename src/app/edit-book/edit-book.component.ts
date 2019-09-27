import { Component, OnInit, Input } from '@angular/core';
import {BooksService} from '../books.service'
import { ActivatedRoute, Router } from '@angular/router';

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
 

  constructor(private booksvc: BooksService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => {
      this.bookid = parseInt(params['id']);
      this.booksvc.GetBookByIdAsync(this.bookid).subscribe(data => {
        this.book = data;
        console.log(this.book.Name);

      })

    });
   }

  ngOnInit() {

  }

  // ngOnChanges(){
  //   this.book = this.booksvc.GetBookById(this.bookid);
  // }

  EditBook(){
    // this.book.thumbnail = this.booksvc.changePath(this.thumbnail);
    // if(this.booksvc.ValidateThumbnailFileExtension(this.book.thumbnail)){
    //   let result = this.booksvc.EditBook(this.book);
    //   alert(result);
    // }
    // else{
    //   alert("Image must be in jpeg format");
    // }
    console.log(this.book.Name);
    this.book.Thumbnail = this.thumbnail;
    let result = this.booksvc.EditBookAsync(this.bookid,this.book);
    result.subscribe(data => {
      if(confirm(data)){
        this.router.navigate(['/booklist']);
      }
    });
  }

  cancel(){
    this.book = undefined;
    this.router.navigate(['/booklist']);
  }

  

}

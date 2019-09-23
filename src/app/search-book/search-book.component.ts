import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  private bookid:number;
  errormessage:string;

  constructor() { }

  ngOnInit() {
  }

  GetErrorMessage(message:string)
  {
    this.errormessage = message;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartraining2019';
  private bookid: number;

  getBookId(bookid: number): void{
    this.bookid = bookid;
  }
}

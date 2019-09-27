import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class BooksService
{
  private allbooks: any[] = [
    { bookid: 1, bookname: 'Pro Asp .NET Core', publisher:'Apress', price: 600.00, thumbnail: 'assets/Images/proaspnet.jpg'},
    { bookid: 2, bookname: 'Angualar 7 Unleashed', publisher: '_SANS', price: 1200.00, thumbnail: 'assets/Images/angular7.jpg' },
    { bookid: 3, bookname: 'Pro LINQ', publisher: 'Apress', price: 500.00, thumbnail: 'assets/Images/linq.jpg' }
  ];

  private bookid: number;

  constructor(private http: HttpClient)
  {
    console.log("BooksService constr called");
  }

  setBookId(bookid: number): void{
    this.bookid = bookid;
  }

  getBookId(): number{
    return this.bookid;
  }

  clearBookId(): void{
    this.bookid = undefined;
  }

  GetAllBooks(): any[]
  {
    return this.allbooks;
  }

  GetBookById(bookid:number): any
  {
    let result;
    result = this.allbooks.find(b => b.bookid == bookid);
    return result;
  }

  AddBook(book : any): string
  {
    //check if the book id exists
    let result = this.allbooks.find(b => b.bookid == book.bookid);
    if(result != undefined)
    {
      return "Book id: " + book.bookid + " already exists";
    }
    this.allbooks.push(book);
    return "Book with id: " +book.bookid +" added successfully";
  }

  DeleteBook(bookid: number): string
  {
    let book = this.GetBookById(bookid);
    this.allbooks.splice(this.allbooks.indexOf(book),1);
    return "Book with id "+bookid+" is deleted.";
  }

  changePath(filename: string): string
  {
    let arr : string[];
    arr = filename.split("\\");

    filename = "assests/Images/" + arr[arr.length - 1];

    return filename;
  }

  ValidateThumbnailFileExtension(filename:string): boolean  
  {
    let filearray: string[];
    filearray = filename.split(".");
    if(filearray[1] == "jpg"){
      return true;
    }
    else{
      return false;
    }
    //return true if the validation is successful
    //return false if the validation fails
  }

  EditBook(newbookdetails:any): string
  {
    for(let i=0 ; i< this.allbooks.length ; i++)
    {
      if(this.allbooks[i].bookid == newbookdetails.bookid)
      {
        this.allbooks[i].bookname = newbookdetails.bookname;
        this.allbooks[i].publisher = newbookdetails.publisher;
        this.allbooks[i].price = newbookdetails.price;
        this.allbooks[i].thumbnail = newbookdetails.thumbnail;
        break;

      }
    }
    return "Book with id: " +newbookdetails.bookid +" edited";
  }

  GetAllBooksAsync(): Observable<any>{
    return this.http.get('https://booksapi20190927045649.azurewebsites.net/books');
  }

  GetBookByIdAsync(bookid: number): Observable<any>{
    return this.http.get('https://booksapi20190927045649.azurewebsites.net/books/'+bookid);
  }

  EditBookAsync(bookid: number, book: any): Observable<any>{
    return this.http.put('https://booksapi20190927045649.azurewebsites.net/editbook/'+bookid,book);
  }

  AddBookAsync(book: any) :Observable<any>{
    return this.http.post('https://booksapi20190927045649.azurewebsites.net/addbook',book);
  }

  DeleteBookAsync(bookid: number) :Observable<any>{
    return this.http.delete('https://booksapi20190927045649.azurewebsites.net/deletebook/'+bookid);
  }
}

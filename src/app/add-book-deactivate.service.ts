import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';

@Injectable({
  providedIn: 'root'
})
export class AddBookDeactivateService implements CanDeactivate<AddBookComponent>{

  constructor() { }

  canDeactivate(component: AddBookComponent): boolean{
    if(component.createaddform.dirty){
      return confirm("Are you sure?");
    }
    
    return true;
  
    
  }
}

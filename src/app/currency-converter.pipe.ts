import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: any, curr: string): any {
    
    switch(curr){

      case 'INR': {
        return value;
        break;
      }
      case 'USD': {
        return value/70;
        break;
      }
      case 'EUR': {
        return value/80;
        break;
      }
      default: {
        return value;
      }      

    }
    
    return null;
  }

}

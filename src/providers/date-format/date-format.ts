import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DateFormatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DateFormatProvider {
 
  dniTygodnia = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Poniedziałek"];
  
  constructor() {
  }
  formatDate(date: Date){
    var day = date.getDay();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return this.dniTygodnia[day] + ' ' + monthIndex + ' ' + year;
  }
}

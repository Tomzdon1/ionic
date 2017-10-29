import { Component, ViewChild  } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import { DateFormatProvider } from '../../providers/date-format/date-format';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { AddRecipePage } from '../add-recipe/add-recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, private formatDate: DateFormatProvider) {
    this.menuCtrl.enable(true, 'authenticated');
  }

}

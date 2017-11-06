import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Item } from './../../models/item/item.models'; 



@IonicPage()

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  items: Observable<Item[]>;
  items2: Observable<Item[]>;
  arrData = [];
  item :Item ={
    name :''
  }
  key = 'dw'
  
    constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {
      this.items = afDB.list('zakupy').valueChanges();
      this.items2 =afDB.list('zakupy').snapshotChanges().map(changes => {
        return changes.map(c=>({
          key : c.payload.key, ...c.payload.val()
       
        }));
      });
      console.log(this.items2);
    }

    btnAddClicked(item: Item){
      console.log(item);
      this.afDB.list<Item>("zakupy").push(item).then(ref=>{
        console.log(ref.key);
        this.key = ref.key
      });
      
    }
    removeItem(items) {
      this.afDB.list('zakupy').remove(items);
    }
    removeAll(){
      this.afDB.list('zakupy').remove();
    }
}
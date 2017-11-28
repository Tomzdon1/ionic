import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './../../models/recipe/recipe.models'; 

@IonicPage()
@Component({
  selector: 'page-list-recipe',
  templateUrl: 'list-recipe.html',
})
export class ListRecipePage {
  searchQuery: string = '';
  items: Observable<Recipe[]>;
  items2 = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
    this.items = afDB.list('przepisy').snapshotChanges().map(changes => {
      return changes.map(c=>({
        key : c.payload.key, ...c.payload.val()
     
      }));
    });
    this.items.subscribe(recipe => this.items2.push(recipe));
    console.log(this.items)
  }
  initializeItems() {
    this.items = this.afDB.list('przepisy').snapshotChanges().map(changes => {
      return changes.map(c=>({
        key : c.payload.key, ...c.payload.val()
     
      }));
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
   
    // set val to the value of the searchbar
    let val = ev.target.value;

    console.log(this.items2);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (let i = 0; i < this.items2.length; i++) {
        this.items2 = this.items2[i].tytul.filter((item) => {
        return (item.tytul.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      }

    }
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { Recipe } from './../../models/recipe/recipe.models'; 


@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {
  item : Recipe ={
    tytul :'',
    skladniki: [],
    prepere:''
  }
  key =''
  skladniki = []
  constructor(public alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Potwierdzenie!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  btnAddClicked(){
    let alert = this.alertCtrl.create({
      title: 'Dodaj Składnik',
      inputs: [
        {
          name: 'skladnik',
          placeholder: 'Składnik',
          type: "text"
        }
      ],
      buttons: [
        {
          text: 'Cofnij',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Dodaj',
          handler: data => {
          this.skladniki.push(data.skladnik);
          console.log(data.skladnik);
          }
        }
      ]
    });
    alert.present();
  }

  removeItem(item){
    var index = this.skladniki.indexOf(item, 0);
    if (index > -1) {
      this.skladniki.splice(index, 1);
    }
  }
  addRecipe(item: Recipe){
    console.log(item);
    item.skladniki = this.skladniki;
    this.afDB.list<Recipe>("przepisy").push(item).then(ref=>{
      this.key = ref.key
      this.alert("Dadałeś przepis. Gratulacje!!");
      this.skladniki = [];
      item.tytul = '';
      item.prepere = '';
      item.skladniki = [];
    });
    
  }


}

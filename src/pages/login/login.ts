import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,MenuController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public menuCtrl: MenuController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.menuCtrl.enable(false, 'authenticated');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  ionViewDidLoad() {
    console.log("JEstetm");
  }
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value + '@eatapp.pl', this.password.value)
    .then(data => {
      this.alert('Success! Jesteś zalogowany');
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      this.alert(error.message);
    })
    
  }
  registerUser() {
    this.navCtrl.push(RegisterPage);
  }

}

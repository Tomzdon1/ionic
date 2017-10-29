import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('confirmPassword') confirmPassword;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    if (this.password.value == this.confirmPassword.value) {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value +'@eatapp.pl', this.password.value)
      .then(data => {
        alert("Hura!! Udało Ci się zarejestrować.")
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        alert('Błąd! Spróbuj ponownie póżniej.')
      })
    }else {
      alert("Hasła się są niezgodne");
    }
  } 

}

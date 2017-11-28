import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddRecipePage } from '../pages/add-recipe/add-recipe';
import { RegisterPage } from '../pages/register/register';
import { ListRecipePage } from '../pages/list-recipe/list-recipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DateFormatProvider } from '../providers/date-format/date-format';
import { Item } from '../models/item/item.models'; 

const firebaseAuth = {
  apiKey: "AIzaSyD092md0fe_Zi9a3IIJTT9-UhGrJiKESBQ",
  authDomain: "eatapp-b6a2b.firebaseapp.com",
  databaseURL: "https://eatapp-b6a2b.firebaseio.com",
  projectId: "eatapp-b6a2b",
  storageBucket: "eatapp-b6a2b.appspot.com",
  messagingSenderId: "355976292850"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ShoppingListPage,
    AddRecipePage,
    ListRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ShoppingListPage,
    AddRecipePage,
    ListRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DateFormatProvider
  ]
})
export class AppModule {}

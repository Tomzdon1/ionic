import { Component, ViewChild  } from '@angular/core';
import { Nav, Platform, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddRecipePage } from '../pages/add-recipe/add-recipe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;
  
    activePage: any;
  
    pages: Array<{icon:string, title: string, component: any}>;

  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.menuCtrl.enable(false, 'authenticated');
    this.pages = [
      { icon:'list-box', title: 'Lista zakupów', component: ShoppingListPage },
      { icon:'add', title: 'Dodaj Przepis', component: AddRecipePage }
    ];
    this.activePage = this.pages[0];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

enableAuthenticatedMenu() {
  this.menuCtrl.enable(false, 'authenticated');
}
  checkActive(page){
    return page == this.activePage;
  }
}


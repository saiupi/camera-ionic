import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'childrens',
    //   url: 'childrens',
    //   icon: 'mail'
    // },
    // {
    //   title: 'Registor',
    //   url: 'persons-registor',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders','Person'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false); // or true 
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[0];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

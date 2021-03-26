import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private menuCtrl:MenuController,private router: Router) {
   }

  ngOnInit() {
    this.menuCtrl.enable(true); // or true 

  }
  

  
  logout(){
    this.router.navigate(['/login']);

  }
 

}

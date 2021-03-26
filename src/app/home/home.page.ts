import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,private menuCtrl: MenuController) {
    
  }

 ngOnInit() {
   this.menuCtrl.enable(false); // or true 
 }
 signUp(){
   this.router.navigate(['/singup']);

 }
 signIn(){
   this.router.navigate(['/login']);
 }
}
  

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
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

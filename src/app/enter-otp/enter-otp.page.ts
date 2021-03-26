import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.page.html',
  styleUrls: ['./enter-otp.page.scss'],
})
export class EnterOtpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  otp(){

      this.router.navigate(['/login']);
    
  }
  goToBack(){
    this.router.navigate(['/singup']); 
  }
}

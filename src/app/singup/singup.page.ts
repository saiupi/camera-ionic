import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  base64Image: string;
  constructor(private router: Router, private camera: Camera) { }
  ngOnInit() {
    //this.takePictures();
  }
  takePictures = () => {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image,"images")
     }, (err) => {
      console.log(err,"images")
     });
  }
  goToBack(){
    this.router.navigate(['/home']);

  }
  goToOtp(){
    this.router.navigate(['/enter-otp']);

  }
  goToLogin(){
    this.router.navigate(['/login']);

  }
  

}

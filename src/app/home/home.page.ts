import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hello!',
      subHeader: 'Make sure you get enough sleep',
      message: 'Have a good day :)',
      buttons: ['Bye!']

    }
    );
    alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Don't forget to smile",
      duration: 2000
      });
    toast.present();
    }
  }










import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ViewVacanciesModalPage } from "../../modals/view-vacancies-modal/view-vacancies-modal.page";
import { UpdateAttendanceModalPage } from "../../modals/update-attendance-modal/update-attendance-modal.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //private router: Router;
  private navExtras: NavigationExtras;

  constructor(private modalController: ModalController, private router: Router) {

  }

  async presentVacancyModal(){

    let modalCtrl = await this.modalController.create({
      component: ViewVacanciesModalPage
    });
    return await modalCtrl.present();
  }

  async presentAttendanceModal(){

    let modalCtrl = await this.modalController.create({
      component: UpdateAttendanceModalPage
    });
    return await modalCtrl.present();
  }

  navigateTo(form: String){

    console.log("formCalled: ",form);
    switch (form) {

      case 'Registration':
        this.router.navigate(['registration-form']);
        break;
      
      case 'Leave':
        this.router.navigate(['leave-application-form-form']);
        break;

      case 'Payment':
        this.router.navigate(['leave-application-form-form']);
        break;
      
      case 'Exit':
        this.router.navigate(['leave-application-form-form']);
        break;

      default:
        break;
    }
  }
}

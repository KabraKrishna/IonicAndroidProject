import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-view-vacancies-modal',
  templateUrl: './view-vacancies-modal.page.html',
  styleUrls: ['./view-vacancies-modal.page.scss'],
})
export class ViewVacanciesModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

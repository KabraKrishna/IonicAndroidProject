import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVacanciesModalPageRoutingModule } from './view-vacancies-modal-routing.module';

import { ViewVacanciesModalPage } from './view-vacancies-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVacanciesModalPageRoutingModule
  ],
  declarations: [ViewVacanciesModalPage]
})
export class ViewVacanciesModalPageModule {}

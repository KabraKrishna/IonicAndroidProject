import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVacanciesModalPage } from './view-vacancies-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVacanciesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVacanciesModalPageRoutingModule {}

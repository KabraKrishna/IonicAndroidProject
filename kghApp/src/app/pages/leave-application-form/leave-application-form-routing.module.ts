import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveApplicationFormPage } from './leave-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveApplicationFormPageRoutingModule {}

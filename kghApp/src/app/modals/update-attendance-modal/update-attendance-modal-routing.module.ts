import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAttendanceModalPage } from './update-attendance-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAttendanceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAttendanceModalPageRoutingModule {}

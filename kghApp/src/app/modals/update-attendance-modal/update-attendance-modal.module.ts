import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAttendanceModalPageRoutingModule } from './update-attendance-modal-routing.module';

import { UpdateAttendanceModalPage } from './update-attendance-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAttendanceModalPageRoutingModule
  ],
  declarations: [UpdateAttendanceModalPage]
})
export class UpdateAttendanceModalPageModule {}

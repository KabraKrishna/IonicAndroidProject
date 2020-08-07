import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveApplicationFormPageRoutingModule } from './leave-application-form-routing.module';

import { LeaveApplicationFormPage } from './leave-application-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveApplicationFormPageRoutingModule
  ],
  declarations: [LeaveApplicationFormPage]
})
export class LeaveApplicationFormPageModule {}

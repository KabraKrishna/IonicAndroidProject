import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../components/header/header.component";
import { CalendarComponent } from "../components/calendar/calendar.component";
import { CalendarMonthComponent } from "../components/calendar-month/calendar-month.component";
import { CalendarWeekComponent } from "../components/calendar-week/calendar-week.component";


@NgModule({
  declarations: [HeaderComponent,
    CalendarComponent,
    CalendarMonthComponent,
    CalendarWeekComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [HeaderComponent,
    CalendarComponent,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarMonthComponent,
    CalendarWeekComponent]
})
export class SharedComponentsModule { }

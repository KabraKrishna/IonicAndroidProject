
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Calendar } from "calendar-base";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  calendarMode: any = {
    modeType: 'month'
  }
  private monthList = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  private weekDayList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  selectedDate: number;
  currentMonthCalendar: any;
  todaysDate: any;
  selectedMonthCalendar: any;
  selectedMonth: any;
  selectedYear: any;
  weeks: any = [];
  week: any = [];
  weekIndex: number;
  isDisabled:boolean = false;

  constructor() {
    this.initializeValues();
    this.weeks = this.getWeeks();
    this.selectedDate = this.todaysDate.getUTCDate();
    this.week = this.getWeek();
  }

  initializeValues() {

    this.todaysDate = new Date()
    this.currentMonthCalendar = new Calendar();
    this.selectedMonth = this.todaysDate.getUTCMonth();
    this.selectedYear = this.todaysDate.getUTCFullYear();
    this.getSelectedCalander(this.selectedYear, this.selectedMonth);


  }
  ngOnInit() {
  }

  changeMode(mode: String) {
    this.calendarMode.modeType = mode;
    this.isDisabled = mode === 'custom' ? true : false;
    let customMaxHeight = this.calendarMode.modeType === 'month' ? '35%' : '60%';
    document.documentElement.style.setProperty('--ion-content-custom-max-height', customMaxHeight);
  }

  back() {
    if(this.calendarMode.modeType === 'week'){
      if(this.weekIndex > 0){
          this.weekIndex = this.weekIndex - 1;
          this.week = this.weeks[this.weekIndex];
      }
    }
    else if(this.calendarMode.modeType === 'month'){

      if (this.selectedMonth === 0) {
        this.selectedMonth = 11
        this.selectedYear = this.selectedYear - 1;
      }
      else {
        this.selectedMonth = this.selectedMonth - 1;
      }
      this.getSelectedCalander(this.selectedYear, this.selectedMonth);
      this.weeks = this.getWeeks();
      if (this.selectedMonth === this.todaysDate.getUTCMonth()) {
        this.selectedDate = this.todaysDate.getUTCDate();
      }
      else {
        this.selectedDate = 0
      }
    }

    // if (this.selectedMonth === 0) {
    //   this.selectedMonth = 11
    //   this.selectedYear = this.selectedYear - 1;
    // }
    // else {
    //   this.selectedMonth = this.selectedMonth - 1;
    // }
    // this.getSelectedCalander(this.selectedYear, this.selectedMonth);
    // this.weeks = this.getWeeks();
    // if (this.selectedMonth === this.todaysDate.getUTCMonth()) {
    //   this.selectedDate = this.todaysDate.getUTCDate();
    // }
    // else {
    //   this.selectedDate = 0
    // }
  }
  next() {
    if(this.calendarMode.modeType === 'week'){

      if(this.weekIndex < this.weeks.length){
        this.weekIndex = this.weekIndex + 1;
        this.week = this.weeks[this.weekIndex];
      }
    }
    else if(this.calendarMode.modeType === 'month'){

      if (this.selectedMonth === 11) {
        this.selectedMonth = 0
        this.selectedYear = this.selectedYear + 1;
      }
      else {
        this.selectedMonth = this.selectedMonth + 1;
      }
      this.getSelectedCalander(this.selectedYear, this.selectedMonth);
      this.weeks = this.getWeeks();
      if (this.selectedMonth === this.todaysDate.getUTCMonth()) {
        this.selectedDate = this.todaysDate.getUTCDate();
      }
      else {
        this.selectedDate = 0
      }
    }




    // if (this.selectedMonth === 11) {
    //   this.selectedMonth = 0
    //   this.selectedYear = this.selectedYear + 1;
    // }
    // else {
    //   this.selectedMonth = this.selectedMonth + 1;
    // }
    // this.getSelectedCalander(this.selectedYear, this.selectedMonth);
    // this.weeks = this.getWeeks();
    // if (this.selectedMonth === this.todaysDate.getUTCMonth()) {
    //   this.selectedDate = this.todaysDate.getUTCDate();
    // }
    // else {
    //   this.selectedDate = 0
    // }
    
  }

  getMonth(val: number): String {
    return this.monthList[val];
  }

  getWeekDayList(): String[] {
    return this.weekDayList;
  }

  getWeeks(): any {
    let weeks: any = [];
    let min = 0;
    let max = 6;
    while (max < this.selectedMonthCalendar.length) {
      let week: any = [];
      for (let index = min; index <= max; index++) {
        week.push(this.selectedMonthCalendar[index])
      }
      weeks.push(week);
      min = max + 1;
      max = max + 7;
    }
    return weeks
  }
  getWeek(): any {
    let week: any = [];
    let flag: boolean = false;
    for (let index = 0; index < this.weeks.length; index++) {
      week = this.weeks[index];
      for (let index = 0; index < week.length; index++) {
        if (week[index].day === this.selectedDate) {
          flag = true;
          break;
        }
      }
      if (flag) {
        this.weekIndex = index;
        console.log(this.weekIndex);
        break;
      }
    }
    return week;
  }

  getDate(dayObject: Object): any {
    return dayObject['day'] ? dayObject['day'] : " ";
  }

  getSelectedCalander(year: number, month: number) {
    this.selectedMonthCalendar = this.currentMonthCalendar.getCalendar(year, month);
  }

  seeEvent(obj: any) {
    console.log(obj);
    this.selectedDate = obj['day'];
    console.log(this.selectedDate);
    //console.log("This event: ",event.toElement.innerHTML,"/",this.getMonth(this.selectedMonth),"/",this.selectedYear);
  }

  isDateSelected(dayObject: any): boolean {
    //console.log("is Object coming: ",dayObject);
    return this.selectedDate === parseInt(dayObject);
  }
}

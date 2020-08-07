import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnInit {

  @Input() inputMonth: any;
  @Input() inputDate: any;
  private weekDayList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  selectedDate: number = 0;

  constructor() {
    //this.selectedDate = this.inputDate;
  }

  ngOnInit() {
    console.log("Input: ", this.inputMonth)
  }

  getWeekDayList(): String[] {
    return this.weekDayList;
  }

  seeEvent(obj: any) {
    console.log(obj);
    this.selectedDate = obj['day'];
    console.log(this.selectedDate);
    //console.log("This event: ",event.toElement.innerHTML,"/",this.getMonth(this.selectedMonth),"/",this.selectedYear);
  }

  isDateSelected(dayObject: any): boolean {
    //console.log("is Object coming: ",dayObject);
    return this.selectedDate !== 0 ?  this.selectedDate === parseInt(dayObject)
    : this.inputDate === parseInt(dayObject);
  }

  getDate(dayObject: Object): any {
    return dayObject['day'] ? dayObject['day'] : " ";
  }

}

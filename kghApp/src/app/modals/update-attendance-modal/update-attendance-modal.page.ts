import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-update-attendance-modal',
  templateUrl: './update-attendance-modal.page.html',
  styleUrls: ['./update-attendance-modal.page.scss'],
})
export class UpdateAttendanceModalPage implements OnInit {

  //@ViewChildren('singleStudentItem') studentItemList: QueryList<'singleStudentItem'>;

  today: any = '';
  dateIndex: String = '';
  toggleStatusChange: any = [];
  isClickEventTriggredAlready: boolean = false;
  isToggleEventTriggredAlready: boolean = false;

  attendanceRecord: any = [
      {
        name: 'John Doe',
        roomNo: 1,
        isPresent: true
      },
      {
        name: 'Andrew Jones',
        roomNo: 5,
        isPresent: false
      }
    ]


  constructor(private modalController: ModalController) { 
    this.today = new Date();
    this.dateIndex = (this.today.getUTCDate() - 1)+''+this.today.getUTCMonth()+''+this.today.getUTCFullYear();
    this.attendanceRecord.forEach(record => {
      this.toggleStatusChange.push(record.name);
    });
    //console.log(this.toggleStatusChange);
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  getInitial(nameVal: String): String{
      let nameValArray = nameVal.split(" ");
      return nameValArray[0].charAt(0)+''+nameValArray[1].charAt(0);
  }

  // toggleAllPresent(){
  //   this.attendanceRecord.forEach(record => {
  //     record.isPresent = true;
  //     //console.log(record); 
  //   });
  // }

  updateAttendance(){
    //console.log(this.studentItemList);
    console.log(this.attendanceRecord);
  }
  buttonToggled(studentName: String){
    this.attendanceRecord.filter((record) =>{
      return record.name === studentName
    }).forEach(record =>{
       record.isPresent = !record.isPresent;
       console.log(record);
    });
  }


}

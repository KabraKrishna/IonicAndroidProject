import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  studentRecordListed: any = [
    {
      "contactnumber" : "0123456789",
      "dob" : "03/12/1994",
      "doj" : "12/03/2019",
      "duration" : "2 years",
      "firstname" : "Alisha",
      "idproof" : "/bin/home/abcd.jpeg",
      "institutionname" : "St xavire school of arts",
      "lastname" : "Smith",
      "roomnumber" : 12,
      "status" : true
    },
    {
      "contactnumber" : "0123456789",
      "dob" : "03/12/1994",
      "doj" : "12/03/2019",
      "duration" : "2 years",
      "firstname" : "John",
      "idproof" : "/bin/home/abcd.jpeg",
      "institutionname" : "St xavire school of arts",
      "lastname" : "Doe",
      "roomnumber" : 3,
      "status" : true
    },
    {
      "contactnumber" : "0123456789",
      "dob" : "03/12/1994",
      "doj" : "12/03/2019",
      "duration" : "2 years",
      "firstname" : "Maria",
      "idproof" : "/bin/home/abcd.jpeg",
      "institutionname" : "St xavire school of arts",
      "lastname" : "Jones",
      "roomnumber" : 9,
      "status" : true
    },
  ]
  studentRecords: any = [];
  searchElement: string = '';

  constructor() {
   }

  ngOnInit() {
    this.studentRecords = this.studentRecordListed;
  }

  filterItems(){
    
    this.studentRecords = this.studentRecordListed.filter(student =>{
        return student.firstname.toLowerCase().indexOf(this.searchElement.toLowerCase()) > -1
    });
  }
}

import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { environment } from '../../../environments/environment';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  databaseRef:any;
  firbaseRef:any;
  listRef: AngularFireList<any>;
  objectRef: AngularFireObject<any>;
  loading: any;

  student2:Object = {
    contactnumber: "0123456789",
    dob: "03/12/1994",
    doj: "12/03/2019",
    duration: "2 years",
    firstname: "John",
    idproof: "/bin/home/abcd.jpeg",
    institutionname: "St xavire school of arts",
    lastname: "Doe",
    reasonofleaving: "none",
    roomnumber: 4,
    status: true
  }


  ngOnInit():void{
      
    
  }

  constructor(private angularFireDatabase: AngularFireDatabase,
              public loadingController: LoadingController) {

    //this.presentLoadingWithOptions();

    // this.firbaseRef = firebase.initializeApp(environment.firebaseConfig,"kgh-application");
    // console.log("Firebase Initialization: ",this.firbaseRef)
    // this.listRef = this.angularFireDatabase.list('/student-records');
    // //this.listRef.set("student2",this.student2);
    // this.objectRef = this.angularFireDatabase.object('/student-records');
    // this.listRef.valueChanges().subscribe(data =>{
    //   console.log("listRef data: ",data);
    // });
    // this.objectRef.valueChanges().subscribe(data =>{
    //   console.log("objectRef data: ",data);
    // });
    //  //this.objectRef = this.angularFireDatabase.object('/student-records/-M6myM6M7NR3SzYIpLti');
     //this.objectRef.remove();

     //this.dismissController();
  
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      animated: true
    });
    await this.loading.present();
  }

  async dismissController() {
    await this.loading.dismiss();
    console.log('Loading dismissed');
  }

}

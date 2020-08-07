import { Component, ViewChild, OnInit, Inject, LOCALE_ID, ViewChildren } from '@angular/core';
import { formatDate } from '@angular/common';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('slider',{static:false}) sliders: IonSlides

  swiperOptions = {
    allowTouchMove: false,   
    initialSlide: 0
   }

  constructor() {}

  logScrollStart(){
    //console.log("begin")
  }
  logScrolling(event: any){
   // console.log("event: ",event)
  }
  logScrollEnd(){

    //console.log("end")
  }

  async swipeSlide(direction: String){
    console.log("SwippedTo: ",direction);
    if(direction === 'Transactions'){
      if(!await this.sliders.isBeginning()){
        await this.sliders.slidePrev();
      }
    }else if(direction === 'Reports'){
      if(! await this.sliders.isEnd()){
        await this.sliders.slideNext()
      }
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
//import { Animation } from '@ionic/core';
import { Animation, AnimationController, IonSlides } from '@ionic/angular';
import { StudentProfileService } from "../../services/student-profile.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {

  @ViewChild('registrationSliser', { static: false }) formSlides: IonSlides;
  pagerIndex: number = 0;
  basicDetails: FormGroup;
  parentDetails: FormGroup;
  guardianDetails: FormGroup;
  isprofilePicContent: boolean = false;

  slidesOptions = {
    allowTouchMove: false,
    initialSlide: 0
  }

  idArray: any = ['zero', 'one', 'two', 'three', 'four'];

  constructor(private animationController: AnimationController,
    private studentProfileService: StudentProfileService) {

  }

  ngOnInit() {
    this.presentSlideSelectedAnimation(this.pagerIndex);
    this.basicDetails = this.studentProfileService.getBasicDetails();
    this.parentDetails = this.studentProfileService.getParentDetails();
    this.guardianDetails = this.studentProfileService.getGuardianDetails();
  }

  validateInput(control: FormControl): boolean{
    return (!control.valid && control.touched);
  }

  async slideToNext() {

    this.pagerIndex = await this.formSlides.getActiveIndex() + 1;
    this.presentSlideSelectedAnimation(this.pagerIndex);

    this.pagerIndex = await this.formSlides.getActiveIndex();
    this.presentSlideSelectedAnimationReverse(this.pagerIndex);

    if (!await this.formSlides.isEnd()) {
      await this.formSlides.slideNext();
    }

  }

  async slideToPrev() {

    this.pagerIndex = await this.formSlides.getActiveIndex()
    this.presentSlideSelectedAnimationReverse(this.pagerIndex);

    this.pagerIndex = (await this.formSlides.getActiveIndex() - 1)
    this.presentSlideSelectedAnimation(this.pagerIndex);

    if (!await this.formSlides.isBeginning()) {
      await this.formSlides.slidePrev();
    }
  }

  async presentSlideSelectedAnimation(id: number) {

    let elementId: string = '#' + this.idArray[id];

    const selectedPager: Animation = this.animationController.create()
      .addElement(document.querySelector(elementId))
      .duration(500)
      .iterations(1)
      .fromTo('background', '#dad9d9', '#9A1591')
      .fromTo('color', '#9A1591', '#fff');

    await this.animationController.create()
      .addAnimation([selectedPager])
      .play();
  }

  async presentSlideSelectedAnimationReverse(id: number) {

    let elementId: string = '#' + this.idArray[id];

    const selectedPager: Animation = this.animationController.create()
      .addElement(document.querySelector(elementId))
      .duration(500)
      .iterations(1)
      .fromTo('background', '#9A1591', '#dad9d9')
      .fromTo('color', '#fff', '#9A1591');

    await this.animationController.create()
      .addAnimation([selectedPager])
      .play();
  }

  openCamera(){
    this.isprofilePicContent = !this.isprofilePicContent;
  }


}


















//animation Example

// let fromWidth:string = (id * 25)+'%';
//     let toWidth:string = id === 4 ? fromWidth : ((id + 1) * 25)+'%';

//     let elementId:string = '#'+this.idArray[id];

//     const selectedPager: Animation = this.animationController.create()
//     .addElement(document.querySelector(elementId))
//     .duration(500)
//     .iterations(1)
//     .fromTo('background', '#dad9d9', '#9A1591')
//     .fromTo('color','#9A1591','#fff');

//     const percentage: Animation = this.animationController.create()
//     .addElement(document.querySelector('.percent-pager'))
//     .duration(500)
//     .easing('linear')
//     .iterations(1)
//     .fromTo('width',fromWidth,toWidth);

//     await this.animationController.create()
//           .addAnimation([selectedPager,percentage])
//           .play();





// chocri 
//  dw-tv 
//   mass customization 
//    orthogonal arrays --> taguchi method
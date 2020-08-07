import { Injectable } from '@angular/core';
//import { StudentDetails } from "../data-objects/student-details";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  private basicDetail: {

  }
  private parentDetail: {
    
  }
  private guardianDetail: {
    name: String,
    address: String,
    contactNumber: Number;
  };

  constructor(private formBuilder: FormBuilder) {

  }

  getBasicDetails(): FormGroup {

    const currentDate = new Date();

    firstName: String;
    lastName: String;
    contactNumber: Number;
    institutionName: String;
    dob: String;
    doj: String;
    roomNumber: String;
    duration: Number;
    status: String;
    idProof: String;
    profilePhote: String;

    let basicDetails =  this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      contactNumber: new FormControl(null, Validators.compose([
        Validators.required, Validators.maxLength(10)])),
      institutionName: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      doj: currentDate.getUTCDate()+currentDate.getUTCMonth()+currentDate.getUTCFullYear(),
      roomNumber: new FormControl(null,Validators.required),
      duration: new FormControl(null,Validators.required),
      status: 'true',
      idProof: new FormControl(null,Validators.required),
      profilePhote: new FormControl(null,Validators.required)
    });

    console.log(basicDetails.controls);

    return basicDetails;
  }

  getParentDetails(): FormGroup {

    name: String;
    contactNumber: Number;
    residenceContact: String;
    idProof: String;
    address: String;
    city: String;

    return this.formBuilder.group({
      name: new FormControl(null,Validators.required),
      contactNumber: new FormControl(null,Validators.compose([
        Validators.required, Validators.maxLength(10)])),
      residenceContact: new FormControl(null),
      idProof: new FormControl(null,Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null,Validators.required)
    })
  }

  getGuardianDetails(): FormGroup{

    name: String;
    contactNumber: Number;
    address: String;
    city: String;

    return this.formBuilder.group({
      name: new FormControl(null,Validators.required),
      contactNumber: new FormControl(null,Validators.compose([
        Validators.required, Validators.maxLength(10)])),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    })

  }
}

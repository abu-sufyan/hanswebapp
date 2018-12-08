import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective,FormBuilder,FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$')
  ]);

  matcher = new MyErrorStateMatcher();
  favoriteSeason: string;
  profileFor = 'Self';
  profileForOpt: string[] = ['Self', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];

  setProfileFor(data){
    this.profileFor = data;
  }
  genderS = 'Male';
  genderOpt: string[] = ['Male','Female'];

  setGender(data){
    this.genderS = data;
  }
  startTime= new Date(1997, 0, 1)

  myFilter = (d: Date): boolean => {
    const year = d.getFullYear();
    return year <= 1997;
  }

}

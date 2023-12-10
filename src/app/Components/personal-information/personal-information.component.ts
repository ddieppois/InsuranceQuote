import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TEXT_ONLY_REGEX} from "../../Utils/form.utility";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-personal-information',
  standalone: true,
  templateUrl: './personal-information.component.html',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit {

  personalInfoForm!: FormGroup;

  ngOnInit(): void {
    this.personalInfoForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required, Validators.pattern(TEXT_ONLY_REGEX)]),
      birthDate: new FormControl('', [Validators.required])
    });
  }

  get email() {
    return this.personalInfoForm.get('email')!;
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get fullName() {
    return this.personalInfoForm.get('fullName')!;
  }

  getFullNameErrorMessage() {
    if (this.fullName.hasError('required')) {
      return 'You must enter a fullName';
    }

    return this.fullName.hasError('fullName') ? 'Not a valid full name' : '';
  }

  get birthDate() {
    return this.personalInfoForm.get('birthDate')!;
  }

}

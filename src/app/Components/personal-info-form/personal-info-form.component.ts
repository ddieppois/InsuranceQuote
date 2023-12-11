import {Component, Input} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from '@angular/common';
import {InsuranceQuoteResponseComponent} from "../insurance-quote-response/insurance-quote-response.component";
import {dateBeforeToday} from "../../Utils/FormDateValidator";
import {VehicleSelectionComponent} from "../vehicle-selection/vehicle-selection.component";
import {SelectFactors} from "../../Utils/SelectFactors";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    InsuranceQuoteResponseComponent,
    VehicleSelectionComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule
  ],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.css'
})
export class PersonalInfoFormComponent {

  @Input() insuranceQuoteForm!: FormGroup;
  drivingExperienceOptions = SelectFactors.drivingExperienceOptions;
  atFaultAccidentOptions = SelectFactors.atFaultTrafficAccidentsOptions;
  claimsNumberOptions = SelectFactors.numberOfClaimsOptions;
  annualMileageOptions = SelectFactors.annualMileageOptions;
  previousInsuranceOptions = SelectFactors.previousInsuranceOptions;

  get email() {
    return this.insuranceQuoteForm.get('email')!;
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get fullName() {
    return this.insuranceQuoteForm.get('fullName')!;
  }

  getFullNameErrorMessage() {
    if (this.fullName.hasError('required')) {
      return 'You must enter a fullName';
    }

    return this.fullName.hasError('pattern') ? 'Not a valid full name' : '';
  }

  get birthDate() {
    return this.insuranceQuoteForm.get('birthDate')!;
  }

  getBirthDateErrorMessage() {
    if (this.birthDate.hasError('required')) {
      return 'You must select a birthdate';
    }

    return this.birthDate.hasError('dateBeforeToday') ? 'Birthdate must be before today\'s date.' : '';
  }
}

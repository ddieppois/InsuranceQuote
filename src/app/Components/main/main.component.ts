import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsuranceQuoteRequest} from "../../Models/insurance-quote-request";
import {PersonalInfoFormComponent} from "../personal-info-form/personal-info-form.component";
import {VehicleSelectionComponent} from "../vehicle-selection/vehicle-selection.component";
import {InsuranceQuoteResponseComponent} from "../insurance-quote-response/insurance-quote-response.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {generateRandomReferenceNumber, TEXT_ONLY_REGEX} from "../../Utils/form.utility";
import {dateBeforeToday} from "../../Utils/FormDateValidator";
import {InsuranceQuoteResponse} from "../../Models/insurance-quote-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuoteService} from "../../Services/quote.service";
import {PreviousQuotesComponent} from "../previous-quotes/previous-quotes.component";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    PersonalInfoFormComponent,
    VehicleSelectionComponent,
    InsuranceQuoteResponseComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PreviousQuotesComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  insuranceQuoteForm!: FormGroup;

  insuranceQuoteResponse?: InsuranceQuoteResponse;

  insuranceQuoteRequest?: InsuranceQuoteRequest;

  insuranceMessage: string = "It's one of those time when you'll need to call us to get your quote!";

  showQuote: boolean = false;
  showInsuranceMessage: boolean = false;

  constructor(private http: HttpClient,
              private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.insuranceQuoteForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required, Validators.pattern(TEXT_ONLY_REGEX)]),
      birthDate: new FormControl('', [Validators.required, dateBeforeToday()]),
      category: new FormControl('', [Validators.required]),
      make: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      drivingExperience: new FormControl('', [Validators.required]),
      atFaultAccident: new FormControl('', [Validators.required]),
      claimsNumber: new FormControl('', [Validators.required]),
      annualMileage: new FormControl('', [Validators.required]),
      previousInsurance: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0)])
    });

  }

  submitQuote() {
    const quoteRequest: InsuranceQuoteRequest = this.insuranceQuoteForm.value;
    this.insuranceQuoteRequest = quoteRequest;
    quoteRequest.age = this.calculateAge(quoteRequest.birthDate);
    quoteRequest.referenceNumber = generateRandomReferenceNumber();
    this.sendDataToApi(quoteRequest);
  }

  toggleShowQuote() {
    this.showQuote = !this.showQuote;
  }

  calculateAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // If the current month is before the birth month, or
    // if it's the birth month but the current day is before the birthday,
    // subtract one year from the age
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  postRequest(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': environment.apiKey
    });
    return this.http.post<any>("http://localhost:8080/insurance-quote", data, {headers});
  }

  sendDataToApi(data: InsuranceQuoteRequest) {
    this.showInsuranceMessage = false;
    this.postRequest(data).subscribe(
      response => {
        console.log('Response from API:', response);
        this.insuranceQuoteResponse = response;
        this.quoteService.addQuote(response);
        this.showQuote = true;
      },
      error => {
        console.error('Error:', error);
        this.insuranceMessage = error.error;
        this.showInsuranceMessage = true;
      }
    );
  }


}

import {Component, OnInit, Input} from '@angular/core';
import carData from '../../../assets/car_model.json';
import {CommonModule} from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-vehicle-selection',
  standalone: true,
  imports: [
    MatInputModule,
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.css'
})
export class VehicleSelectionComponent implements OnInit {

  @Input() insuranceQuoteForm!: FormGroup;
  carData: any;
  categories: string[] = [];
  makes: string[] = [];
  models: string[] = [];
  years: number[] = [];
  allCars: any[] = [];

  ngOnInit() {
    this.allCars = carData.data.car_Model_Lists.results;
    this.categories = [...new Set(this.allCars.map(car => car.Category))];
  }

  onCategoryChange() {
    const category = this.insuranceQuoteForm.get('category')?.value;
    this.makes = [...new Set(this.allCars.filter(car => car.Category === category).map(car => car.Make))];
    this.models = [];
    this.years = [];
  }

  onMakeChange() {
    const category = this.insuranceQuoteForm.get('category')?.value;
    const make = this.insuranceQuoteForm.get('make')?.value;
    this.models = [...new Set(this.allCars.filter(car => car.Make === make && car.Category === category).map(car => car.Model))];
    this.years = [];
  }

  onModelChange() {
    const make = this.insuranceQuoteForm.get('make')?.value;
    const model = this.insuranceQuoteForm.get('model')?.value;
    this.years = [...new Set(this.allCars.filter(car => car.Make === make && car.Model === model).map(car => car.Year))];
  }

  get price() {
    return this.insuranceQuoteForm.get('price')!;
  }

  getPriceErrorMessage() {
    if (this.price.hasError('required')) {
      return 'Price is required.';
    }

    return this.price.hasError('min') ? 'Price must be a positive number.' : '';
  }

}

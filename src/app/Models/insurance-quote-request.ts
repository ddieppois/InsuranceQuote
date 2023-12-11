export interface InsuranceQuoteRequest {
  referenceNumber: string;
  age: number;
  email: string;
  fullName: string;
  birthDate: string;
  category: string;
  make: string;
  model: string;
  year: number;
  drivingExperience: string;
  atFaultAccident: string;
  claimsNumber: string;
  annualMileage: string;
  previousInsurance: string;
  price: number;
}

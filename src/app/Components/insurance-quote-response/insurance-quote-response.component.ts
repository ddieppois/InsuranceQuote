import { Component, Input, EventEmitter, Output } from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsuranceQuoteResponse} from "../../Models/insurance-quote-response";
import {InsuranceQuoteRequest} from "../../Models/insurance-quote-request";

@Component({
  selector: 'app-insurance-quote-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-quote-response.component.html',
  styleUrl: './insurance-quote-response.component.css'
})
export class InsuranceQuoteResponseComponent {
  @Input() insuranceQuoteResponse?: InsuranceQuoteResponse;
  @Input() quoteRequest?: InsuranceQuoteRequest;
  @Output() toggleEvent = new EventEmitter<void>();

  toggleShowQuote() {
    this.toggleEvent.emit();
  }
}

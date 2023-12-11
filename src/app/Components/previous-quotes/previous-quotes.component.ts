import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../Services/quote.service";
import {CommonModule, JsonPipe} from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {InsuranceQuoteResponse} from "../../Models/insurance-quote-response";


@Component({
  selector: 'app-previous-quotes',
  standalone: true,
  imports: [
    JsonPipe,
    MatTableModule,
    CommonModule
  ],
  templateUrl: './previous-quotes.component.html',
  styleUrl: './previous-quotes.component.css'
})
export class PreviousQuotesComponent implements OnInit {
  displayedColumns: string[] = ['referenceNumber', 'price'];
  dataSource: InsuranceQuoteResponse[] = [];
  showPreviousQuote: boolean = false;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.quotes$.subscribe(quotes => {
      this.dataSource = quotes;
    });
    this.quoteService.quotes$.subscribe(quotes => {
      this.showPreviousQuote = quotes.length > 0;
    });
  }

}

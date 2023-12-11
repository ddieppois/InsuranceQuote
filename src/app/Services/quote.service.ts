import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotesSource = new BehaviorSubject<any[]>([]);
  quotes$ = this.quotesSource.asObservable();

  addQuote(quote: any) {
    const currentQuotes = this.quotesSource.getValue();
    this.quotesSource.next([...currentQuotes, quote]);
  }

  getQuotes(): Observable<any[]> {
    return this.quotes$;
  }

}

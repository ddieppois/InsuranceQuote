import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InsuranceQuoteAPIService {

  private apiUrl = 'http://localhost:8080/insurance-quote';

  // constructor(private http: HttpClient) {
  // }
  //
  // postRequest(data: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data);
  // }
}

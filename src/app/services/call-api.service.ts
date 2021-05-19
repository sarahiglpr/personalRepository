import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CallAPIService {

  constructor(private httpClient: HttpClient) { }

  endpoint: string = 'https://quotes.rest/qod?language=en';

  getQuoteDay() {
    return this.httpClient
      .get(this.endpoint);
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InschrijvenService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  addInschrijven(body: object): Observable<HttpResponse<any>> {
    return this.http.post(`${this.baseUrl}/inschrijven/add`, body, {
      observe: 'response',
    });
  }
}

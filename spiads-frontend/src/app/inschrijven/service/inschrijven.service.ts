import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InschrijvenService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  addInschrijven(body: object) {
    this.http.post(`${this.baseUrl}/inschrijven/add`, body).subscribe();
  }
}

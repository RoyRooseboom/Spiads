import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  getSchoolUrl(url: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/school/getUrl${url}`, {
      responseType: 'text',
    });
  }
}

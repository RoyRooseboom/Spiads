import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lid } from 'src/app/entities/lid';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080';

  getAllLeden(): Observable<Lid[]> {
    return this.http.get<Lid[]>(`${this.baseUrl}/administratie/get`, {
      observe: 'body',
    });
  }
}

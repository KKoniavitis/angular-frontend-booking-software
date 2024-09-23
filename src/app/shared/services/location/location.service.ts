/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:8080/api/locations';  // Spring Boot API URL

  constructor(private http: HttpClient) { }

  getCountries(query?: string): Observable<any> {
    if (query) {
      return this.http.get(`${this.baseUrl}/search?q=${query}`);
    } else {
      return this.http.get(`${this.baseUrl}/all`);  // Fetch all countries if no query
    }
  }
}
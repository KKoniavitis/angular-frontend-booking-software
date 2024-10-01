import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export interface Company {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/api/companies/all'; // Spring Boot API URL

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`http://localhost:8080/api/companies/${id}`);
  }

  bookAppointment(appointmentDetails: any): Observable<any> {
    // return this.auth.getAccessTokenSilently().pipe(
    //   switchMap((token: string | undefined) => {
    //     if (!token) {
    //       throw new Error('User is not authenticated');
    //     }
    //
    //     //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    //
    //     return this.http.post(`http://localhost:8080/api/appointments`, appointmentDetails);
    //   })
    // );
    return this.http.post(`http://localhost:8080/api/appointments`, appointmentDetails);
  }
}

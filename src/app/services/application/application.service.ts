import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IApplication } from '../../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  #apiUrl = environment.baseUrl + '/application'
  #http = inject(HttpClient);

  getApplications(): Observable<IApplication[]> {
    return this.#http.get<IApplication[]>(`${this.#apiUrl}/get/applications`);
  }

  addApplication(formData: IApplication): Observable<IApplication> {
    return this.#http.post<IApplication>(`${this.#apiUrl}/add/application`, formData);
  }

  deleteApplication(applicationId: number): Observable<any> {
    return this.#http.delete<any>(`${this.#apiUrl}/delete/${applicationId}`);
  }

  updateApplication(formData: IApplication, applicationId: number): Observable<IApplication> {
    return this.#http.put<IApplication>(`${this.#apiUrl}/update/${applicationId}`, formData);
  }

  getSpecificById(applicationId: number): Observable<any> {
    return this.#http.get(`${this.#apiUrl}/getById/${applicationId}`);
  }
}

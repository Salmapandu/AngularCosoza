import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ILicense } from '../../models/license';

@Injectable({
  providedIn: 'root',
})
export class LicenseeService {
  constructor() {}

  #apiUrl = environment.baseUrl + '/licensee';
  #http = inject(HttpClient);

  getLicensees(): Observable<ILicense[]> {
    return this.#http.get<ILicense[]>(`${this.#apiUrl}/get/licensees`);
  }

  addLicensee(formData: ILicense): Observable<ILicense> {
    return this.#http.post<ILicense>(`${this.#apiUrl}/add/licensee`, formData);
  }

  deleteLicensee(licenseeId: number): Observable<any> {
    return this.#http.delete<any>(`${this.#apiUrl}/delete/${licenseeId}`);
  }

  updateLicensee(formData: ILicense, licenseeId: number): Observable<ILicense> {
    return this.#http.put<ILicense>(
      `${this.#apiUrl}/update/${licenseeId}`,
      formData
    );
  }

  getSpecificById(licenseeId: number): Observable<any> {
    return this.#http.get(`${this.#apiUrl}/getById/${licenseeId}`);
  }
}

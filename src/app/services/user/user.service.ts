import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  #apiUrl = environment.baseUrl + '/user'
  #http = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.#http.get<IUser[]>(`${this.#apiUrl}/get/users`);
  }

  addUser(formData: IUser): Observable<IUser> {
    return this.#http.post<IUser>(`${this.#apiUrl}/add/user`, formData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.#http.delete<any>(`${this.#apiUrl}/delete/${userId}`);
  }

  updateUser(formData: IUser, userId: number): Observable<IUser> {
    return this.#http.put<IUser>(`${this.#apiUrl}/update/${userId}`, formData);
  }

  getSpecificById(userId: number): Observable<any> {
    return this.#http.get(`${this.#apiUrl}/getById/${userId}`);
  }
}

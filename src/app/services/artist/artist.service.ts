import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IArtist } from '../../models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  #apiUrl = environment.baseUrl + '/artist';
  #http = inject(HttpClient);

  getArtists(): Observable<IArtist[]> {
    return this.#http.get<IArtist[]>(`${this.#apiUrl}/get/artists`);
  }

  addArtist(formData: IArtist): Observable<IArtist> {
    return this.#http.post<IArtist>(`${this.#apiUrl}/add/artist`, formData);
  }

  deleteArtist(artistId: number): Observable<any> {
    return this.#http.delete<any>(`${this.#apiUrl}/delete/${artistId}`);
  }

  updateArtist(formData: IArtist, artistId: number): Observable<IArtist> {
    return this.#http.put<IArtist>(
      `${this.#apiUrl}/update/${artistId}`,
      formData
    );
  }

  getSpecificById(artistId: number): Observable<any> {
    return this.#http.get(`${this.#apiUrl}/getById/${artistId}`);
  }
}

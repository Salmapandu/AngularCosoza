import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Artwork } from '../../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  #apiUrl = environment.baseUrl + '/artwork';
  
  constructor(private http: HttpClient) {}

  deleteArtwork(artworkId: number): Observable<void> {
    return this.http.delete<void>(`${this.#apiUrl}/${artworkId}`);
  }

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.#apiUrl}/get/artwork`);
  }

  addArtwork(formData: Artwork): Observable<Artwork> {
    return this.http.post<Artwork>(`${this.#apiUrl}/add/artwork`, formData);
  }

  updateArtwork(formData: Artwork, artworkId: number): Observable<Artwork> {
    return this.http.put<Artwork>(`${this.#apiUrl}/update/${artworkId}`, formData);
  }

  getSpecificById(artworkId: number): Observable<any> {
    return this.http.get(`${this.#apiUrl}/getById/${artworkId}`);
  }
}

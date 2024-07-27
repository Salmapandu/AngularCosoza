import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private baseUrl = 'api/artworks';  // URL yako ya API

  constructor(private http: HttpClient) {}

  deleteArtwork(artworkId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${artworkId}`);
  }

  getArtworks(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}`);
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

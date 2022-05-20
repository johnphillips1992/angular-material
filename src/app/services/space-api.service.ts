import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISpaceLaunches } from '../models/space-launches';

@Injectable({
  providedIn: 'root'
})
export class SpaceApiService {
  private baseURL = 'https://lldev.thespacedevs.com';
  
  constructor(private http: HttpClient) { }

  getRandomUsers(): Observable<ISpaceLaunches> {
   const URL = `${this.baseURL}/2.0.0/launch/upcoming/?format=json&offset=0&ordering=window_start`;
   return this.http.get<ISpaceLaunches>(URL);
  }
}

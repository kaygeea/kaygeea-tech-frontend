import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{
  protected url = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) {}

  fetchHomeProfile() {
    return this.http.get<Profile>(this.url)
  }
}

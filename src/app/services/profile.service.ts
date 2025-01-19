import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { Observable, of, tap } from 'rxjs';
import { LsCacheService } from './ls-cache.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly _url = environment.apiUrl;
  profile!: Profile;
  
  constructor(
    private readonly http: HttpClient,
    private readonly lsCacheService: LsCacheService,
  ) {}

  fetchHomePageProfile(lsi?: string | null): Observable<Profile> {
    const cachedProfile: Profile | null = this.lsCacheService.getProfileData();
  
    if (cachedProfile) {
      return of<Profile>(cachedProfile).pipe(tap((cachedData) => {
        this.profile = cachedData;
      }));
    }

    const targetUrl = lsi 
      ? `${this._url}${lsi}` 
      : `${this._url}${environment.lsiFallback}`;

    return this.http.get<Profile>(targetUrl).pipe(
      tap((response) => {
        this.lsCacheService.addProfileData(response);
        this.profile = response;
      }),
    )
  }
}

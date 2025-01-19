import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { ProjectDetail } from '../interfaces/project-details';

@Injectable({
  providedIn: 'root'
})
export class LsCacheService {

  private readonly _profileStorageBaseKey: string = "profileData";
  private readonly _projectDetailStorageBaseKey: string = "projectDetailData";

  constructor() {}

  addProfileData(value: Profile) {
    this.addToLsCache<Profile>(this._profileStorageBaseKey, value);
  }

  getProfileData() {
    return this.getFromLsCache<Profile>(this._profileStorageBaseKey);
  }

  addProjectDetail(projectName: string, value: ProjectDetail) {
    const key = `${this._projectDetailStorageBaseKey}${projectName}`;
    this.addToLsCache<ProjectDetail>(key, value);
  }

  getProjectDetail(projectName: string): ProjectDetail | null{
    const key = `${this._projectDetailStorageBaseKey}${projectName}`;
    return this.getFromLsCache(key);
  }

  removeProjectDetail(projectName: string) {
    const key = `${this._projectDetailStorageBaseKey}${projectName}`;
    this.removeFromLsCache(key);
  }

  clearProfileData() { 
    this.removeFromLsCache(this._profileStorageBaseKey); 
  } 
  
  clearProjectDetails() {
    const pdKeysToRemove = Object.keys(localStorage).filter(
      (key) =>
        key.startsWith(this._projectDetailStorageBaseKey)
    );

    pdKeysToRemove.forEach((key) => localStorage.removeItem(key));
  }

  clearAppData() {
    this.clearAllFromCache();
  }

  private addToLsCache<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  private getFromLsCache<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  }

  private removeFromLsCache(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }

  private clearAllFromCache(): void {
    try {
      const keysToRemove = Object.keys(localStorage).filter(
        (key) => 
          key.startsWith(this._profileStorageBaseKey) ||
          key.startsWith(this._projectDetailStorageBaseKey)
      );

      keysToRemove.forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.error('Error removing app data from localStorage', error);
    }  
  }
}


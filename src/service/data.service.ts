import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jsonData from '../data/user.json'; // Import the JSON file as a module

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getData(): Observable<any[]> {
    return of(jsonData);
  }
}

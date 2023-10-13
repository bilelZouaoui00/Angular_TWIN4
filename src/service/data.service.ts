import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jsonDataUser from '../data/user.json'; // Import the JSON file as a module
import jsonDataProduct from '../data/produits.json'; // Import the JSON file as a module

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getData(): Observable<any[]> {
    return of(jsonDataUser);
  }

  getDataProduct(): Observable<any[]> {
    return of(jsonDataProduct);
  }

}

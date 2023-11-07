import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jsonData from '../data/user.json'; // Import the JSON file as a module
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  usersList: User[]= [];


//URL du Backend
url = "http://localhost:3000/users";

httpOption={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};


  // getData(): Observable<any[]> {
    getAllUsers(){
      return this.http.get<User[]>(this.url);
     }

   }

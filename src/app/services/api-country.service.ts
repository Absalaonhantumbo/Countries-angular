import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { ICountry } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class ApiCountryService {
  

  constructor(private http: HttpClient) { }

  getAllCountry(){
    return this.http.get<ICountry[]>(`${API_URL}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<ICountry | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<ICountry[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<ICountry[]>(url).pipe(catchError(() => of([])));
  }

  searchRegion(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<ICountry[]>(url).pipe(catchError(() => of([])));
  }

  searchCountry(region: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/name/${region}`;
    return this.httpClient.get<ICountry[]>(url).pipe(catchError(() => of([])));
  }
}

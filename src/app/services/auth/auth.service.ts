/*
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = 'https://localhost:7236/api/auth';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  getToken(): Observable<string | null> {
    if(this.token) {
      return of(this.token)
    } else {
      return this.http.get<{ token: string }>(this.authUrl).pipe(
        map(response => response.token),
        tap(token => this.token = token),
        catchError(() => of(null));
    }
  }
}
*/

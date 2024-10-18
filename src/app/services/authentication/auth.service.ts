import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:5166/api/Conta';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginData: { login: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, loginData).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

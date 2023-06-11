import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8089/api/auth';

  constructor(private http: HttpClient) {}

  authenticateUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${this.baseUrl}/authenticate`, body);
  }
}

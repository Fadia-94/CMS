import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(user: UserModule): Observable<UserModule> {
    return this.http.post<UserModule>(`${this.baseUrl}/register`, user);
  }

  login(user: UserModule): Observable<UserModule> {
    return this.http.post<UserModule>(`${this.baseUrl}/login`, user);
  }
}


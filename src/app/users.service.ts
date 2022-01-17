import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public token = localStorage.getItem('token') || '';

  public header = new HttpHeaders().set('access-token', this.token);

  constructor(private http: HttpClient) { }

  public signUpData(signUp: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/SignUp', signUp)
  }

  public loginData(login: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/Login', login);
  }

  public getData() {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers', { headers: this.header })
  }
}

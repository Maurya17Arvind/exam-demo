import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getData(signUp: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/SignUp', signUp)
  }

  loginData(login: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/Login', login);
  }
}

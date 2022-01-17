import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public isLogOut: boolean = false;
  public token = localStorage.getItem('token') || '';
  public header = new HttpHeaders().set('access-token', this.token);
  // public studentToken = localStorage.getItem('token') || '';
  // public studentHeader = new HttpHeaders().set('access-token', this.studentToken);




  constructor(private http: HttpClient) { }

  public signUpData(signUp: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/SignUp', signUp)
  }

  public loginData(login: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/Login', login);
  }

  public getData(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers', { headers: this.header })
  }

  public studentProlfile(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/student/getStudentDetail', { headers: this.header })
  }

  public viewData(id: any): Observable<any> {
    return this.http.get(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewStudentDetail?id=${id}`, { headers: this.header })
  }
}

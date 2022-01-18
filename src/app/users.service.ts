import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public isLogOut: boolean = false;
  public token = localStorage.getItem('token') || '';
  // public header = new HttpHeaders().set('access-token', this.token);
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
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers')
  }

  public studentProlfile(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/student/getStudentDetail')
  }
  public viewData(id: string): Observable<any> {
    return this.http.get(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewStudentDetail?id=${id}`)
  }

  public createExam(examData: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam', examData)
  }
  public viewExam(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam')
  }
}

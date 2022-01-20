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

  //signUpData start
  public signUpData(signUp: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/SignUp', signUp)
  }
  //signUpData end

  //login start
  public loginData(login: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/Login', login);
  }
  //login end

  //teacter show all student data start
  public getData(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers')
  }
  //teacter show all student data end

  //student folder get student profile start
  public studentProlfile(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/student/getStudentDetail')
  }
  //student folder get student profile end

  //teacher folder show student detail start
  public viewData(id: string): Observable<any> {
    return this.http.get(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewStudentDetail?id=${id}`)
  }
  //teacher folder show student detail end

  //teacher folder create exam start
  public createExam(examData: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam', examData)
  }
  //teacher folder create exam end

  //teacher folder view exam start
  public viewExam(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam')
  }
  //teacher folder view exam end

  //teacher folder get exam paper start
  public viewExamDeatils(id: string): Observable<any> {
    return this.http.get(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/examDetail?id=${id}`)
  }
  //teacher folder get exam paper start

  //teacher folder verify student start
  public verifyStudentData(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/dashboard/Teachers/StudentForExam')
  }
  //teacher folder verify student end

  //student folder exam paper start
  public getPaper(id: string): Observable<any> {
    return this.http.get(`https://nodejsexamination.herokuapp.com/student/examPaper?id=${id}`)
  }
  //student folder exam paper end

  public allStudentForExam(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/student/studentExam')
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public isLogOut: boolean = false;
  public token:string = localStorage.getItem('token') || '';
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
  //teacher folder get exam paper end

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

  //student folder all student for exam start
  public allStudentForExam(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/student/studentExam')
  }
  //student folder all student for exam end

  //teacher folder editExam start
  public editExam(id: string, myForm: any): Observable<any> {
    return this.http.put(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/editExam?id=${id}`, myForm);
  }
  //teacher folder editExam end

  //teacher folder deleteExam start
  public deleteExam(id: string): Observable<any> {
    return this.http.delete(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/deleteExam?id=${id}`)
  }
  //teacher folder deleteExam end

  public forgotPassword(myForm: any): Observable<any> {
    return this.http.post('https://nodejsexamination.herokuapp.com/users/ForgotPassword', myForm)
  }

  public giveExam(id: string, myForm: any): Observable<any> {
    return this.http.post(`https://nodejsexamination.herokuapp.com/student/giveExam?id=${id}`, myForm)
  }

  //student folder update student name start 
  public updateStudent(name): Observable<any> {
    return this.http.put('https://nodejsexamination.herokuapp.com/student/studentProfile', name)
  }
  //student folder update student name end

  //chnage password Start
  public tokenCheckPassword(): Observable<any> {
    return this.http.get('https://nodejsexamination.herokuapp.com/users/newPassword')
  }

  public changePassword(token: string, changeForm: any): Observable<any> {
    return this.http.post(`https://nodejsexamination.herokuapp.com/users/ForgotPassword/Verify?token=${token}`, changeForm)
  }
  //chnage password end


  //resetPassword Start
  public resetPassword(newPasswordForm: any): Observable<any> {
    return this.http.post(`https://nodejsexamination.herokuapp.com/users/ResetPassword`, newPasswordForm)
  }
  //reset Password end
}

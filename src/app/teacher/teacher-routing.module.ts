import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { VerifyStudentDataComponent } from './verify-student-data/verify-student-data.component';
import { ViewExamDetailsComponent } from './view-exam-details/view-exam-details.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTeacherComponent
  },
  {
    path: 'studentList',
    component: StudentDataListComponent
  },
  {
    path: 'viewDetail/:_id',
    component: ViewStudentDetailsComponent
  },
  {
    path: 'viewDetail',
    component: ViewStudentDetailsComponent
  },
  {
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'viewExam',
    component: ViewExamComponent
  },
  // {
  //   path: 'viewExamDetail',
  //   component: ViewExamDetailsComponent
  // },
  {
    path: 'viewExamDetail/:_id',
    component: ViewExamDetailsComponent
  },
  {
    path: 'verifyStudent',
    component: VerifyStudentDataComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

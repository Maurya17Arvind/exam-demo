import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Authguard/auth.guard';
import { ExamListResolver } from '../Resolver/exam-list.resolver';
import { StudentListResolver } from '../Resolver/student-list.resolver';
import { VerifyStudentResolver } from '../Resolver/verify-student.resolver';
import { ViewExamDetailResolver } from '../Resolver/view-exam-detail.resolver';
import { ViewStudentDetailResolver } from '../Resolver/view-student-detail.resolver';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { EditExamComponent } from './edit-exam/edit-exam.component';
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
    canDeactivate: [AuthGuard],
    component: StudentDataListComponent,
    resolve: { studentList: StudentListResolver }
  },
  {
    path: 'viewDetail/:_id',
    component: ViewStudentDetailsComponent,
    resolve: { viewDetail: ViewStudentDetailResolver }
  },
  // {
  //   path: 'viewDetail',
  //   component: ViewStudentDetailsComponent
  // },
  {
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'viewExam',
    component: ViewExamComponent,
    resolve: { examList: ExamListResolver }
  },
  // {
  //   path: 'viewExamDetail',
  //   component: ViewExamDetailsComponent
  // },
  {
    path: 'viewExamDetail/:_id',
    component: ViewExamDetailsComponent,
    resolve: { viewExamDetail: ViewExamDetailResolver }
  },
  {
    path: 'verifyStudent',
    component: VerifyStudentDataComponent,
    resolve: { verifyStudent: VerifyStudentResolver }
  },
  {
    path: 'editExam/:_id',
    component: EditExamComponent
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

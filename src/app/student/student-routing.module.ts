import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExamForStudentComponent } from './all-exam-for-student/all-exam-for-student.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'student',
    component: ProfileComponent
  },
  {
    path: 'examPaper/:_id',
    component: ExamPaperComponent
  },
  {
    path: 'allExamList',
    component: AllExamForStudentComponent
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
export class StudentRoutingModule { }

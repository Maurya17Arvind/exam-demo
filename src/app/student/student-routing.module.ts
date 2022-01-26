import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExamResolver } from '../studentResolver/all-exam.resolver';
import { PaperResolver } from '../studentResolver/paper.resolver';
import { AllExamForStudentComponent } from './all-exam-for-student/all-exam-for-student.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeComponent
  },
  {
    path: 'student',
    component: StudentHomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'examPaper/:_id',
    component: ExamPaperComponent,
    resolve: { examPaper: PaperResolver}
  },
  {
    path: 'allExamList',
    component: AllExamForStudentComponent,
    resolve: { allExam: AllExamResolver }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'examPaper',
    component: ExamPaperComponent
  },
  {
    path: 'examPaper/:_id',
    component: ExamPaperComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

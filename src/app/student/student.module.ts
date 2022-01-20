import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { AllExamForStudentComponent } from './all-exam-for-student/all-exam-for-student.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamPaperComponent,
    AllExamForStudentComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

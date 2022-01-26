import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';
import { AllExamForStudentComponent } from './all-exam-for-student/all-exam-for-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamPaperComponent,
    AllExamForStudentComponent,
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }

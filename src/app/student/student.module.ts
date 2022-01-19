import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ExamPaperComponent } from './exam-paper/exam-paper.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamPaperComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

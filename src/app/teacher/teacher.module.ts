import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewExamDetailsComponent } from './view-exam-details/view-exam-details.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { VerifyStudentDataComponent } from './verify-student-data/verify-student-data.component';


@NgModule({
  declarations: [
    StudentDataListComponent,
    ViewStudentDetailsComponent,
    CreateExamComponent,
    ViewExamComponent,
    ViewExamDetailsComponent,
    HomeTeacherComponent,
    VerifyStudentDataComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }

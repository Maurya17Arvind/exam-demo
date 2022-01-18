import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from './view-exam/view-exam.component';


@NgModule({
  declarations: [
    StudentDataListComponent,
    ViewStudentDetailsComponent,
    CreateExamComponent,
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }

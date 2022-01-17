import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ExamListComponent } from './exam-list/exam-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ExamListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDataListComponent
  },
  {
    path: 'teacher',
    component: StudentDataListComponent
  },
  {
    path: 'viewDetail/:_id',
    component: ViewStudentDetailsComponent
  },
  {
    path: 'viewDetail',
    component: ViewStudentDetailsComponent
  },
  {
    path: 'createExam',
    component: CreateExamComponent
  },
  {
    path: 'viewExam',
    component: ViewExamComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

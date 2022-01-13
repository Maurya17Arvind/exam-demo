import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataListComponent } from './student-data-list/student-data-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDataListComponent
  },
  {
    path: 'teacher',
    component: StudentDataListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

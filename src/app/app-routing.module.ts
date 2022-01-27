import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authguard/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'teacher',
    canActivate: [AuthGuard],
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

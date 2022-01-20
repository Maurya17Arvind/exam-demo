import { Component, OnInit } from '@angular/core';
import { AllExamData, AllExamForStudent } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-all-exam-for-student',
  templateUrl: './all-exam-for-student.component.html',
  styleUrls: ['./all-exam-for-student.component.scss']
})
export class AllExamForStudentComponent implements OnInit {

  public allExamForStudents: AllExamData[] = []
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.allStudentForExam().subscribe({
      next: (res) => {
        this.allExamForStudents = res.data;
        console.log(` this.allExamForStudents`, this.allExamForStudents)
      }
    })
  }

}

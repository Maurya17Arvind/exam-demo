import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllExamData, AllExamForStudent } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-all-exam-for-student',
  templateUrl: './all-exam-for-student.component.html',
  styleUrls: ['./all-exam-for-student.component.scss']
})
export class AllExamForStudentComponent implements OnInit {

  public allExamForStudents: AllExamData[] = []
  public showTable: boolean = false;

  constructor(private userService: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.userService.allStudentForExam().subscribe({
      next: (res) => {
        console.log('res list', res);

        if (res.statusCode == 200) {
          this.allExamForStudents = res.data;
          this.toster.success(res.message);
          this.showTable = true;
          // console.log(` this.allExamForStudents`, this.allExamForStudents)
        } else {
          this.showTable = false;
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }

}

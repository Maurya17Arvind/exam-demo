import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public backButton: boolean = false;
  public examForStudent: AllExamForStudent;

  constructor(private userService: UsersService, private toster: ToastrService, private activatedRoute: ActivatedRoute) {
    this.examForStudent = this.activatedRoute.snapshot.data['allExam'];
  }

  ngOnInit(): void {
    // this.userService.allStudentForExam().subscribe({
    //   next: (res: AllExamForStudent) => {
    //     if (res.statusCode == 200) {
    //       this.allExamForStudents = res.data;
    //       this.toster.success(res.message);
    //       this.showTable = true;
    //       this.backButton = true;
    //     } else {
    //       this.showTable = false;
    //     }
    //   },
    //   error: (err) => {
    //     this.toster.error(err.message);
    //   }
    // })
    if (this.examForStudent.statusCode == 200) {
      this.allExamForStudents = this.examForStudent.data;
      this.backButton = true;
      this.showTable = true;
      this.toster.success(this.examForStudent.message);
    } else {
      this.showTable = false;
      this.toster.error(this.examForStudent.message);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditShowExamResponse, EditViewResponseData } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.scss']
})
export class EditExamComponent implements OnInit {

  public id!: string;
  public myForm!: FormGroup;
  public updateButton: boolean = false;
  public allQuestion: Object = {};
  public viewExamDeatils: EditViewResponseData[];



  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private toster: ToastrService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params['_id'];
  }



  ngOnInit(): void {
    this.userService.viewExamDeatils(this.id).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.viewExamDeatils = res.data.questions;
          this.toster.success(res.message);
          this.updateButton = true;
        } else {
          this.updateButton = false;
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })


  }

  public changeExam(): void {
    this.allQuestion = {
      subjectName: "Arvind Exam",
      questions: this.viewExamDeatils,
      notes: ["10mins exam", "start time 10am"]
    }

    this.userService.editExam(this.id, this.allQuestion).subscribe({
      next: (res: EditShowExamResponse) => {
        console.log('res.data :>> ', res.data);
        if (res.statusCode == 200) {
          this.toster.success(res.message);
          this.router.navigate(['/viewExam'])
        } else {
          this.toster.error(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }


}

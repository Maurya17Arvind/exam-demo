import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamPaperResponse, PaperData } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public id!: string;
  public myForm!: FormGroup;
  // public viewExamDeatils: ViewExamDetail[] = [];
  public submitButton: boolean = false;
  public examPapers: PaperData[] = [];
  public paper: ExamPaperResponse;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private toster: ToastrService, private formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.params['_id'];
    this.paper = this.activatedRoute.snapshot.data['examPaper'];
    // this.myForm = this.formBuilder.group({
    //   questions: '',
    //   answer: ''
    // })
  }

  ngOnInit(): void {

    if (this.paper.statusCode == 200) {
      this.examPapers = this.paper.data;
      this.toster.success(this.paper.message);
      this.submitButton = true;
    } else {
      this.toster.error(this.paper.message);
    }



    // this.userService.getPaper(this.id).subscribe({
    //   next: (res: ExamPaperResponse) => {
    //     if (res.statusCode == 200) {
    //       this.examPapers = res.data;
    //       console.log('this.examPapers :>> ', res);
    //       this.toster.success(res.message);
    //       this.submitButton = true;
    //     } else {
    //       this.toster.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     this.toster.error(err.message);
    //   }
    // })
  }


  //   public submitPaper = {
  //   questions:this.examPapers.
  // }

  // public onSubmit(): void {
  //   this.userService.giveExam(this.id, this.myForm).subscribe({
  //     next: (res) => {
  //       console.log('res :>> ', res);
  //     }
  //   })
  // }

}

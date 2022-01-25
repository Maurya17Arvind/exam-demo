import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewExamDetail } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-exam-details',
  templateUrl: './view-exam-details.component.html',
  styleUrls: ['./view-exam-details.component.scss']
})
export class ViewExamDetailsComponent implements OnInit {

  public id!: string;
  public viewExamDeatils: ViewExamDetail[] = [];
  public backButton: boolean = false;
  public examQuestion;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private toster: ToastrService, private spinner: NgxSpinnerService) {
    this.examQuestion = this.activatedRoute.snapshot.data['viewExamDetail'];
  }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['_id'];
    this.getExamPaper();
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000)
  }

  public getExamPaper() {

    if (this.examQuestion.statusCode == 200) {
      this.backButton = true;
      this.viewExamDeatils = this.examQuestion.data.questions;
      this.toster.success(this.examQuestion.message);
    } else {
      this.toster.error(this.examQuestion.message);
    }


    // this.usersService.viewExamDeatils(this.id).subscribe((res) => {
    //   // console.log('res.data :>> ', res.data);
    //   if (res.statusCode == 200) {
    //     this.viewExamDeatils = res.data.questions;
    //     this.backButton = true;
    //     this.toster.success(res.message);
    //   } else {
    //     this.toster.error(res.message);
    //   }
    // })

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Result, StudentAnswer, StudentDetailsResponse } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss']
})
export class ViewStudentDetailsComponent implements OnInit {

  public id!: string;
  public _id!: string;
  public name!: string;
  public email!: string;
  public studentData: StudentDetailsResponse;
  public resultTable: boolean = false;
  public studentResults: Result[];
  public noExam: boolean = false;
  public viewExam: boolean = true;
  public hideExam: boolean = false;
  public noAnswer: boolean = false;
  public studentAnswer;
  public answerLength;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private toster: ToastrService) {
    this.studentData = this.activatedRoute.snapshot.data['viewDetail'];
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['_id'];
    this.getData();
  }

  public getData() {
    // this.usersService.viewData(this.id).subscribe((res) => {
    //   // console.log(`view`, res)
    //   if (res.statusCode === 200) {
    //     this._id = res.data[0]._id;
    //     this.name = res.data[0].name;
    //     this.email = res.data[0].email;
    //     this.toster.success(res.message);
    //   } else {
    //     this.toster.error(res.message);
    //   }
    // })
    if (this.studentData.statusCode == 200) {
      this._id = this.studentData.data[0]._id;
      this.name = this.studentData.data[0].name;
      this.email = this.studentData.data[0].email;
    }
  }
  public result() {
    if (this.studentData.data[0].Result.length > 0) {
      this.studentResults = this.studentData.data[0].Result;
      // console.log('this.studentResults :>> ', this.studentData.data[0].Result);
      this.resultTable = true;
      this.viewExam = false;
      this.hideExam = true;
    } else {
      this.hideExam = true;
      this.viewExam = false;
      this.noExam = true;
    }
  }

  public hideResult() {
    this.resultTable = false;
    this.viewExam = true;
    this.hideExam = false;
  }

  public onModal(i: number) {
    if (this.studentResults[i].studentAnswer) {
      if (this.studentResults[i].studentAnswer.length > 0) {
        this.studentAnswer = this.studentResults[i].studentAnswer;
        console.log('this.studentAnswer :>> ', this.studentAnswer);
        this.noAnswer = false;
      }
    } else {
      this.noAnswer = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewExamDetail } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-exam-details',
  templateUrl: './view-exam-details.component.html',
  styleUrls: ['./view-exam-details.component.scss']
})
export class ViewExamDetailsComponent implements OnInit {

  public id!: string;
  public questions: string[] = [];
  public question!: string;
  public answer!: string;
  public options: string[] = [];
  public viewExamDeatils: ViewExamDetail[] = [];

  constructor(private viewExamDetail: UsersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id'];
    // console.log(`this.id`, this.id)
    this.getExamPaper()
  }
  public getExamPaper() {
    this.viewExamDetail.viewExamDeatils(this.id).subscribe((res) => {
      // console.log(`res.data`, res.data);
      // console.log(`this.id view`, this.id)
      // console.log(`res.data.questions`, res.data.questions);
      this.viewExamDeatils = res.data.questions;

      // console.log(`this.viewExamDeatils`, this.viewExamDeatils)
    })
  }
}

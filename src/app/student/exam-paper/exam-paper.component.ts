import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewExamDetail } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public id!: string;
  // public viewExamDeatils: ViewExamDetail[] = [];

  constructor(private studentPaper: UsersService, private router: ActivatedRoute) {
    // this.id = this.router.snapshot.params['_id'];
  }

  ngOnInit(): void {
    this.studentPaper.getPaper(this.id).subscribe({
      next: (res) => {
        console.log(`res paper`, res)
        // console.log(`this.id`, this.id)
      }
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamPaperResponse, PaperData } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.scss']
})
export class ExamPaperComponent implements OnInit {

  public id!: string;
  // public viewExamDeatils: ViewExamDetail[] = [];
  public examPapers: PaperData[] = [];
  constructor(private studentPaper: UsersService, private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['_id'];

  }

  ngOnInit(): void {
    this.studentPaper.getPaper(this.id).subscribe({
      next: (res: ExamPaperResponse) => {
        console.log(`res paper`, res);
        this.examPapers = res.data;
        console.log('this.examPaper', this.examPapers);

        // console.log(`this.id`, this.id)
      }
    })
  }


}

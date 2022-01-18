import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {

  // public email!: string;
  // public note!: string[];
  // public subjectName!: string;
  public id!: string;
  // public v!: string;

  public viewExamLists = [{
    email: '',
    note: '',
    subjectName: '',
    _id: '',
    __v: ''
  }]
  constructor(private viewExam: UsersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id']
    this.viewExam.viewExam().subscribe({
      next: (res) => {
        // console.log(`viewExam`, res.data)
        this.viewExamLists = res.data;
        // console.log(`this.viewExamLists`, this.viewExamLists)
        // this.email = res.data[0].email;
        // this.note = res.data[0].notes;
        // this.subjectName = res.data[0].subjectName;
        // this.id = res.data[0]._id;
        // this.v = res.data[0].__v;
      }
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private usersService: UsersService, private router: ActivatedRoute, private toster: ToastrService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id'];
    console.log(`this.id`, this.id)
    this.getExamPaper()
  }

  public getExamPaper() {
    this.usersService.viewExamDeatils(this.id).subscribe((res) => {
      if (res.statusCode == 200) {
        this.viewExamDeatils = res.data.questions;
        this.backButton = true;
        this.toster.success(res.message);
      } else {
        this.toster.error(res.message);
      }
    })
  }
}

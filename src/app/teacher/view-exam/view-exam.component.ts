import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewExamData } from 'src/app/AllInterFace/student-list';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent implements OnInit {

  public email!: string;
  public note: string[] = [];
  public subjectName!: string;
  public id!: string;
  public v!: string;

  public viewExamLists: ViewExamData[] = []

  constructor(private userService: UsersService, private router: ActivatedRoute, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id'];
    // console.log(`this.id`, this.id)
    this.userService.viewExam().subscribe({
      next: (res) => {
        console.log(`viewExam`, res.data)
        this.viewExamLists = res.data;
        this.toastr.success(res.message);
      },
      error: (err) => {
        this.toastr.error(err.message);
      }
    })
  }
  // viewExam(id: string): void {
  //   this.route.navigate(['viewExamDetail/' + id]);
  // }

  public open(id: string) {
    this.viewExamLists.find((e) => {
      // console.log(`v`, e)
      if (e._id == id) {
        this.email = e.email;
        // console.log(`e._id`, e._id)
        this.note = e.notes;
        // console.log(`this.note`, this.note)
        this.subjectName = e.subjectName;
        this.id = e._id;
        this.v = e.__v;
      }
    })
  }


}

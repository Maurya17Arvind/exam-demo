import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';
import { StudentList, StudentListResponse } from 'src/app/AllInterFace/student-list';
import { ActivatedRoute } from '@angular/router';
import { canComponentDeactivate } from 'src/app/Authguard/auth.guard';


@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss']
})
export class StudentDataListComponent implements OnInit, canComponentDeactivate {

  public studentsList: StudentList[] = [];
  public backButton: boolean = false;
  public resData: StudentListResponse;

  constructor(private userService: UsersService, private toster: ToastrService, private activatedRoute: ActivatedRoute) {
    this.resData = this.activatedRoute.snapshot.data['studentList'];
  }
  confirm(): boolean {
    return window.confirm('Tussi ja rhe ho?');
  }

  ngOnInit(): void {
    // this.userService.getData().subscribe({
    //   next: (res: StudentListResponse) => {
    //     if (res.statusCode == 200) {
    //       console.log(`res`, res);
    //       this.studentsList = res.data;
    //       this.toster.success(res.message);
    //       this.backButton = true;
    //     } else {
    //       this.toster.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     this.toster.error(err.message);
    //   }
    // })
    if (this.resData.statusCode == 200) {
      this.studentsList = this.resData.data;
      this.toster.success(this.resData.message);
      this.backButton = true;
    } else {
      this.toster.error(this.resData.message)
    }
  }

}

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
  public p: Number = 1;
  public count: Number = 15;

  public studentsList: StudentList[];
  public loadData: boolean = false;
  public resData: StudentListResponse;
  public totalStudent: number;

  constructor(private userService: UsersService, private toster: ToastrService, private activatedRoute: ActivatedRoute) {
    this.resData = this.activatedRoute.snapshot.data['studentList'];
  }
  confirm(): boolean {
    return window.confirm('Are you sure you want to navigate to anyother page');
  }

  ngOnInit(): void {
    if (this.resData.statusCode == 200) {
      this.totalStudent = this.resData.count;
      this.studentsList = this.resData.data;
      this.toster.success(this.resData.message);
      this.loadData = true;
    } else {
      this.toster.error(this.resData.message);
    }
  }

}

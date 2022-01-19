import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';
import { StudentList, StudentListResponse } from 'src/app/AllInterFace/student-list';


@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss']
})
export class StudentDataListComponent implements OnInit {

  public studentsList: StudentList[] = [];
  public backButton: boolean = false;
  constructor(private accessData: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.accessData.getData().subscribe({
      next: (res: StudentListResponse) => {
        if (res.statusCode == 200) {
          console.log(`res`, res);
          this.studentsList = res.data;
          this.toster.success(res.message);
          this.backButton = true;
        } else {
          this.toster.error(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }

}

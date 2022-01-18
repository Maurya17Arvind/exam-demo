import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';
import { StudentList } from 'src/app/AllInterFace/student-list';


@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.scss']
})
export class StudentDataListComponent implements OnInit {

  public studentsList: StudentList[] = [{
    status: '',
    _id: '',
    name: '',
    email: ''
  }]

  constructor(private accessData: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.accessData.getData().subscribe({
      next: (res: any) => {
        // console.log(`res`, res);
        this.studentsList = res.data;
        this.toster.success(res.message);
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }

}

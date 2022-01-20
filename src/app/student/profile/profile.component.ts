import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentProfile } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public token: any;
  public studentRole: string = '';
  public studentId: string = '';
  public studentName: string = '';
  public studentEmail: string = '';
  public showProfile: boolean = false;

  constructor(private studentProlfile: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
    this.studentProlfile.studentProlfile().subscribe({
      next: (res: StudentProfile) => {
        // console.log(`res`, res)
        // setTimeout(() => {
        // }, 1000)
        if (res.statusCode == 200) {
          this.studentRole = res.data.role;
          this.studentId = res.data._id;
          this.showProfile = true;
          this.studentName = res.data.name;
          this.studentEmail = res.data.email;
          this.toster.success(res.message);
        } else {
          this.showProfile = false;
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })

  }
}

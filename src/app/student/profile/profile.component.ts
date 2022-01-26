import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public newName: string;
  public updateStudent: object = {};

  constructor(private userService: UsersService, private toster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
    this.userService.studentProlfile().subscribe({
      next: (res: StudentProfile) => {
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


  public update() {
    this.updateStudent = {
      name: this.newName
    }
    this.userService.updateStudent(this.updateStudent).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.toster.success(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }
}

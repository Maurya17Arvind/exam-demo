import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentProfile, StudentProfileData, UpdateStudentName } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public myForm!: FormGroup;
  public showProfile: boolean = false;
  public studentProfile: StudentProfileData;
  public newName: string;
  // public updateStudent: object = {};

  constructor(private userService: UsersService, private toster: ToastrService, private router: Router, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ''
    })
  }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
    // this.userService.studentProlfile().subscribe({
    //   next: (res: StudentProfile) => {
    //     if (res.statusCode == 200) {
    //       this.showProfile = true;
    //       this.studentProfile = res.data;
    //       this.toster.success(res.message);
    //     } else {
    //       this.showProfile = false;
    //     }
    //   },
    //   error: (err) => {
    //     this.toster.error(err.message);
    //   }
    // })
    this.getProfile();

  }

  public getProfile() {
    this.userService.studentProlfile().subscribe({
      next: (res: StudentProfile) => {
        if (res.statusCode == 200) {
          this.showProfile = true;
          this.studentProfile = res.data;
          console.log('this.studentProfile :>> ', this.studentProfile);
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

  //update student/user name start
  public update() {
    // this.updateStudent = {
    //   name: this.newName
    // }
    this.userService.updateStudent(this.myForm.value).subscribe({
      next: (res: UpdateStudentName) => {
        if (res.statusCode == 200) {
          this.toster.success(res.message);
        }
        else {
          this.toster.error(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }
  //update student name end

}

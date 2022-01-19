import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VerifyData } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-verify-student-data',
  templateUrl: './verify-student-data.component.html',
  styleUrls: ['./verify-student-data.component.scss']
})
export class VerifyStudentDataComponent implements OnInit {

  public status!: string;
  public name!: string;
  public email!: string;
  public _id!: string;
  public verifyDatas: VerifyData[] = []
  constructor(private userService: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.userService.verifyStudentData().subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.verifyDatas = res.data;
          console.log(`res`, res)
          this.toster.success(res.message);
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

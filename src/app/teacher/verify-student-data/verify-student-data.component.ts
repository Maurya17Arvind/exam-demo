import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VerifyData, VerifyDataResponse } from 'src/app/AllInterFace/student-list';
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
  public backButton: boolean = false;
  public verifyDatas: VerifyData[] = [];
  public verifyDataResponse: VerifyDataResponse;

  constructor(private userService: UsersService, private toster: ToastrService, private activatedRoute: ActivatedRoute) {
    this.verifyDataResponse = this.activatedRoute.snapshot.data['verifyStudent'];
  }

  ngOnInit(): void {
    // this.userService.verifyStudentData().subscribe({
    //   next: (res: VerifyDataResponse) => {
    //     console.log('res :>> ', res);
    //     if (res.statusCode == 200) {
    //       this.verifyDatas = res.data;
    //       console.log(`res`, res)
    //       this.toster.success(res.message);
    //     } else {
    //       this.toster.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     this.toster.error(err.message);
    //   }
    // })
    if (this.verifyDataResponse.statusCode == 200) {
      this.verifyDatas = this.verifyDataResponse.data;
      this.toster.success(this.verifyDataResponse.message);
      this.backButton = true;
      // console.log('this.verifyDatas :>> ', this.verifyDatas);
    } else {
      this.toster.error(this.verifyDataResponse.message);
    }
  }

}

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
  public verifyStudentLength: number;

  constructor(private userService: UsersService, private toster: ToastrService, private activatedRoute: ActivatedRoute) {
    this.verifyDataResponse = this.activatedRoute.snapshot.data['verifyStudent'];
  }

  ngOnInit(): void {
    if (this.verifyDataResponse.statusCode == 200) {
      this.verifyDatas = this.verifyDataResponse.data;
      this.verifyStudentLength = this.verifyDatas.length;
      this.toster.success(this.verifyDataResponse.message);
      this.backButton = true;
    } else {
      this.toster.error(this.verifyDataResponse.message);
    }
  }

}

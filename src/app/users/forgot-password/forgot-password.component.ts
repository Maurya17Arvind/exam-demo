import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ForgotPassword, ForgotPasswordResponse } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public emailInuput!: ForgotPassword;
  public errorMessage: boolean = false;
  public myForm!: FormGroup;
  constructor(private userService: UsersService, private toster: ToastrService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  public sendEmail() {
    this.spinner.show();
    this.userService.forgotPassword(this.myForm.value).subscribe({
      next: (res: ForgotPasswordResponse) => {
        this.spinner.hide();
        if (res.statusCode == 200) {
          this.toster.success(res.message)
          console.log('res email:>> ', res);
        } else {
          this.toster.error(res.message);

        }
      },
      error: (err) => {
        this.errorMessage = true;
        this.toster.error(err.message);
        this.spinner.hide();
      }
    })
  }
  get fControl() {
    return this.myForm.controls;
  }
}

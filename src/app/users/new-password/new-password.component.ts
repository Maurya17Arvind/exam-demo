import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  public resetPasswordForm!: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService) {
    this.resetPasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }


  public onResetPassword() {
    this.userService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: (res) => {
        this.toster.success(res.message);
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }

  get fControl() {
    return this.resetPasswordForm.controls;
  }
}

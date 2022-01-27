import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  public resetPasswordForm!: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService, private router: Router) {
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
        if (res.statusCode == 200) {
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


  public goBack() {
    if (localStorage.getItem('teacherRole')) {
      this.router.navigate(['/teacher']);
    } else {
      this.router.navigate(['/student']);
    }
  }
  get fControl() {
    return this.resetPasswordForm.controls;
  }
}

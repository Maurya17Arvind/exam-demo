import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgotPassword } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public emailInuput!: ForgotPassword;
  public myForm!: string;
  constructor(private userService: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
  }

  public sendEmail() {
    this.emailInuput = {
      email: this.myForm,
    }
    this.userService.forgotPassword(this.emailInuput).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.toster.success(res.message)
          console.log('res email:>> ', res);
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

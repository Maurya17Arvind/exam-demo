import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/AllInterFace/student-list';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public isLogIn: boolean = false;
  public loginForm!: FormGroup
  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['arvind.tagline@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
  }

  public onLogin() {
    this.usersService.loginData(this.loginForm.value).subscribe({
      next: (res: LoginResponse) => {
        if (res.statusCode == 200) {
          if (res.data.role === 'teacher') {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('teacherName', res.data.name);
            localStorage.setItem('teacherRole', res.data.role);
            localStorage.setItem('teacherEmail', res.data.email);
            this.toster.success(res.message);
            this.router.navigate(['teacher']);
          }
          else {
            localStorage.setItem('token', res.data.token)
            this.toster.success(res.message);
            localStorage.setItem('studentName', res.data.name)
            localStorage.setItem('studentEmail', res.data.email)
            this.router.navigate(['student'])
          }
        } else {
          this.toster.error(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.error.message);
      }
    })
  }
}

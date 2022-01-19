import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(private loginService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['arvind.tagline@gmail.com', [Validators.required, Validators.email]],
      password: ['Arvind@', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
  }

  public onLogin() {
    this.loginService.loginData(this.loginForm.value).subscribe({
      next: (res: LoginResponse) => {
        console.log('login', res);
        if (res.data.role === 'teacher') {
          console.log(`res.data`, res.data);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('name', res.data.name)
          localStorage.setItem('email', res.data.email)
          // console.log(`res.data.name`, res.data.name)
          this.toster.success(res.message);
          this.router.navigate(['teacher'])
        }
        else {
          localStorage.setItem('token', res.data.token)
          this.toster.success(res.message);
          this.router.navigate(['student'])
        }
      },
      error: (err) => {
        this.toster.error(err.error.message);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private loginService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
  }

  public onLogin() {
    this.loginService.loginData(this.loginForm.value).subscribe({
      next: (res) => {
        // console.log('res', res);
        if (res.data.role === 'teacher') {
          console.log(`res.data`, res.data);
          // localStorage.setItem(res.data.token)
          this.toster.success(res.message);
          this.router.navigate(['teacher'])
        }
        else {
          this.toster.success(res.message);
          this.router.navigate(['student'])
        }
      },
      error: (err) => {
        // console.log('err', err);
        this.toster.error(err.error.message);
      }
    })
  }
}

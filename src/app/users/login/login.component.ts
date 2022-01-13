import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private loginService: UsersService, private formBuilder: FormBuilder, private toster: ToastrService) {
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
        this.toster.success(res.message);
      },
      error: (err) => {
        // console.log('err', err);
        this.toster.error(err.message);
      }
    })
  }
}

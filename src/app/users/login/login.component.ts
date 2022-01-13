import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private loginService: UsersService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  ngOnInit(): void {
  }

  public onLogin() {
    this.loginService.loginData(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('res', res);
      }
    })
  }
}

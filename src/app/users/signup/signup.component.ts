import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { SignUpResponse } from 'src/app/AllInterFace/student-list';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public errorMessage: boolean = false;
  public signUpForm!: FormGroup;
  public role: string[] = ['Teacher', 'Student']


  constructor(private signup: UsersService, private formBuilder: FormBuilder, private router: Router, private toster: ToastrService) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }
  public onSignUp() {
    this.signup.signUpData(this.signUpForm.value
      // {
      //   name: this.signUpForm.value.name,
      //   email: this.signUpForm.value.email,
      //   password: this.signUpForm.value.password,
      //   role: this.signUpForm.value.role
      // }
    ).subscribe({
      next: (res: SignUpResponse) => {
        this.router.navigate(['login']);
        this.toster.success(res.message);
        console.warn('signup', res)
      },
      error: (err) => {
        this.errorMessage = true;
        this.toster.error(err.message);
      }
    })
  }

  get fControl() {
    return this.signUpForm.controls;
  }

}

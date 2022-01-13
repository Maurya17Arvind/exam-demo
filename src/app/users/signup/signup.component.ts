import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public errorMessage: boolean = false;
  public signUpForm!: FormGroup;
  public role: string[] = ['Teacher', 'Student']


  constructor(private signup: UsersService, private formBuilder: FormBuilder, private router: Router) {
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
    this.signup.getData({
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      role: this.signUpForm.value.role
    }).subscribe({
      next: (res) => {
        console.log('res :>> ', res);
        this.router.navigate(['login']);
      },
      error: (err) => {
        this.errorMessage = true;
      }
    })
  }

  get fControl() {
    return this.signUpForm.controls;
  }

}

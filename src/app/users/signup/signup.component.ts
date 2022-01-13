import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public myForm!: FormGroup;
  public role: string[] = ['Teacher', 'Student']


  constructor(private signup: UsersService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      role: ''
    })
  }

  ngOnInit(): void {

  }
  public onSignUp() {
    this.signup.getData({
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      role: this.myForm.value.role
    }).subscribe({
      next: (res) => {
        console.log('res :>> ', res);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  public examForm!: FormGroup;
  public examQuestions = [{
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  }]

  public answer = [{

  }]

  constructor(private examService: UsersService, private formBuilder: FormBuilder, private router: Router) {
    this.examForm = this.formBuilder.group({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    })
  }

  ngOnInit(): void {

  }

  public createExam() {
    console.log(`this.examForm`, this.examForm.value)
    this.examService.createExam(this.examForm.value).subscribe(res => {
      console.log(`res`, res)
    })
  }

  public addQuestion() {
    this.examQuestions.push(this.examForm.value)
    console.log(`this.examForm.value`, this.examForm.value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  public examForm!: FormGroup;
  public questions!: FormArray;
  public notes!: FormArray;
  public viewExam: boolean = false;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private toster: ToastrService) {
    // this.examForm = this.formBuilder.group({
    // })
  }

  ngOnInit(): void {
    this.examForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
      questions: new FormArray([]),
      notes: new FormControl(['Arvind', 'Maurya']),
    });
    this.addQuestion();
    // this.addNotes();
  }

  public createPaper() {
    this.userService.createExam(this.examForm.value).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          console.log('exam  :>> ', res);
          this.toster.success(res.message);
          this.viewExam = true;
        } else {
          this.toster.error(res.message);
          this.viewExam = false;
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }

  public createExam(): FormGroup {
    return this.formBuilder.group({
      question: 'Which of the following statements define Computer Graphics?',
      answer: 'It refers to designing images',
      options: new FormControl(['ans1', 'ans2', 'ans3', 'ans4'])
      // option1: 'It refers to designing plans',
      // option2: ' It means designing computers',
      // option3: 'It refers to designing images',
      // option4: 'None of the mentioned'
    });
  }

  // public notesData(): FormGroup {
  //   return this.formBuilder.group({

  //   })
  // }

  public addQuestion() {
    this.questions = this.examForm.get('questions') as FormArray;
    this.questions.push(this.createExam());
  }

  public removeQuestion(i: number) {
    this.questions = this.examForm.get('questions') as FormArray;
    this.questions.removeAt(i);
  }

  // public addNotes() {
  //   this.notes = this.examForm.get('notes') as FormArray;
  //   this.notes.push(this.notesData())
  //   console.log('this.notes :>> ', this.notes);
  // }

}

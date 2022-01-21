import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
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
  public createButton: boolean = true;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private toster: ToastrService) {
    // this.examForm = this.formBuilder.group({
    // })
  }

  ngOnInit(): void {
    this.examForm = new FormGroup({
      subjectName: new FormControl(),
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
          console.log('res  :>> ', res);
          this.toster.success(res.message);
          this.viewExam = true;
          this.createButton = false;
        } else {
          this.toster.error(res.message);
          this.viewExam = false;
          this.createButton = true;
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
    console.log('this.examForm.value :>> ', this.examForm.value);
    this.questions = this.examForm.get('questions') as FormArray;
    this.questions.push(this.createExam());
    console.log('this.questions :>> ', this.questions);
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

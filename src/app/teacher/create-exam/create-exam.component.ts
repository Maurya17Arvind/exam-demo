import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateExamResponses } from 'src/app/AllInterFace/student-list';
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
  public createExamButton: boolean = false;
  public viewExam: boolean = false;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    // this.examForm = this.formBuilder.group({
    // })
  }

  ngOnInit(): void {
    this.examForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
      questions: this.formBuilder.array([]),
      notes: this.formBuilder.array([]),
    });
    this.addQuestion();
    this.addNote();
  }
  public createExam() {
    return this.formBuilder.group({
      question: 'asdfa',
      answer: 'asda',
      options: this.formBuilder.group({
        option1: 'asd',
        option2: 'asd',
        option3: 'asd',
        option4: 'asd'
      })
    });
  }
  public createPaper() {
    const { subjectName, questions, notes } = this.examForm.value;
    const data: any = {};
    const finalQuestion: any = [];
    data.subjectName = subjectName;
    data.notes = notes;
    questions.forEach((element) => {
      const finalElement: any = {};
      const secondElement: any = {};
      finalElement.question = element.question;
      finalElement.answer = element.answer;
      finalElement.options = [];
      secondElement.options = [];
      secondElement.options.push(Object.values(element.options));
      secondElement.options.forEach(element => {
        finalElement.options = element;
      });
      finalQuestion.push(finalElement);

    });
    data.questions = finalQuestion;
    this.userService.createExam(data).subscribe({
      next: (res) => {
        this.viewExam = true;
        this.toastr.success(res.message);
      },
      error: (err) => {
        this.toastr.error(err);
      }
    })
  }


  public addQuestion() {
    this.questions = this.examForm.get('questions') as FormArray;
    this.questions.push(this.createExam());
    if (this.questions.length == 15) {
      this.createExamButton = true;
    }
  }

  public removeQuestion(i: number) {
    this.questions = this.examForm.get('questions') as FormArray;
    this.questions.removeAt(i);
  }


  //Add notes start
  get noteData() {
    return this.examForm.get('notes') as FormArray;
  }
  public addNote() {
    this.noteData.push(new FormControl(''))
  }
  public removeNotes(i: number) {
    this.noteData.removeAt(i);
  }
  //Add notes end
  // public addNotes() {
  //   this.notes = this.examForm.get('notes') as FormArray;
  //   this.notes.push(this.notesData())
  //   console.log('this.notes :>> ', this.notes);
  // }

}

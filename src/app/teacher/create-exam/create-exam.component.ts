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
      question: '',
      answer: '',
      options: this.formBuilder.group({
        option1: '',
        option2: '',
        option3: '',
        option4: ''
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
      const tempElement: any = {};
      const finalElement: any = {};
      tempElement.question = element.question;
      tempElement.answer = element.answer;
      tempElement.options = [];
      finalElement.options = [];
      finalElement.options.push(Object.values(element.options));
      finalElement.options.forEach(element => {
        tempElement.options = element;
      });
      finalQuestion.push(tempElement);

    });
    data.questions = finalQuestion;
    this.userService.createExam(data).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.viewExam = true;
          this.toastr.success(res.message);
        } else {
          this.toastr.error(res.message);
        }
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

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditShowExamResponse, EditViewResponseData } from 'src/app/AllInterFace/student-list';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-testing',
  templateUrl: './edit-testing.component.html',
  styleUrls: ['./edit-testing.component.scss']
})
export class EditTestingComponent implements OnInit {

  public examForm!: FormGroup;
  public questions!: FormArray;
  public notes!: FormArray;
  public createExamButton: boolean = false;
  public viewExam: boolean = false;
  public allQuestion: Object = {};
  public viewExamDeatils: EditViewResponseData[];
  public id!: string;


  constructor(private userService: UsersService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    this.id = this.activatedRoute.snapshot.params['_id'];
  }

  ngOnInit(): void {
    this.userService.viewExamDeatils(this.id).subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.viewExamDeatils = res.data.questions;
        } else {
        }
      },
      error: (err) => {
      }
    })
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

  public changeExam(): void {
    this.allQuestion = {
      subjectName: "Arvind Exam",
      questions: this.viewExamDeatils,
      notes: ["10mins exam", "start time 10am"]
    }

    this.userService.editExam(this.id, this.allQuestion).subscribe({
      next: (res: EditShowExamResponse) => {
        console.log('res.data :>> ', res.data);
        if (res.statusCode == 200) {
          this.router.navigate(['/viewExam'])
        } else {
        }
      },
      error: (err) => {
      }
    })
  }
}

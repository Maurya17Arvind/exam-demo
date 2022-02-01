import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  public id!: string;
  public myForm!: FormGroup;
  public updateButton: boolean = false;
  public allQuestion: Object = {};
  public questions!: FormArray;
  public viewExamDeatils: EditViewResponseData[];



  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private toster: ToastrService, private router: Router, private fb: FormBuilder) {
    this.id = this.activatedRoute.snapshot.params['_id'];
  }



  ngOnInit(): void {
    this.userService.viewExamDeatils(this.id).subscribe({
      next: (res) => {
        console.log('res :>> ', res.data);
        if (res.statusCode == 200) {
          // this.viewExamDeatils = res.data.questions;
          this.toster.success(res.message);
          this.updateButton = true;
        } else {
          this.updateButton = false;
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
    this.myForm = this.fb.group({
      subjectName: [''],
      questions: this.fb.array([]),
      notes: this.fb.array([]),
    });

  }
  public createExam() {
    return this.fb.group({
      question: '',
      answer: '',
      options: this.fb.group({
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      })
    });
  }

  public createPaper() {
    const { subjectName, questions, notes } = this.myForm.value;
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
  }
  public editExam(): void {
    this.questions = this.myForm.get('questions') as FormArray;
    this.questions.push(this.createExam());
    this.allQuestion = {
      subjectName: "Arvind Exam",
      questions: this.viewExamDeatils,
      notes: ["10mins exam", "start time 10am"]
    }

    this.userService.editExam(this.id, this.myForm).subscribe({
      next: (res: EditShowExamResponse) => {
        console.log('res :>> ', res);
        if (res.statusCode == 200) {
          this.toster.success(res.message);
          this.router.navigate(['/viewExam'])
        } else {
          this.toster.error(res.message);
        }
      },
      error: (err) => {
        this.toster.error(err.message);
      }
    })
  }
}

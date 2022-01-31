import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-form-array-learn',
  templateUrl: './form-array-learn.component.html',
  styleUrls: ['./form-array-learn.component.scss']
})
export class FormArrayLearnComponent implements OnInit {

  public myForm: FormGroup;
  // public addressForm!: FormGroup;
  public questions: FormArray;
  public notes: FormArray;
  public options: FormArray;
  public allOptions = [];
  public extraOption = [];

  constructor(private fb: FormBuilder, private userService: UsersService, private toastr: ToastrService) {
    // this.myForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   addressForm: new FormGroup({
    //     stat: new FormControl(),
    //     city: new FormControl()
    //   })
    // })
    // this.myForm = this.fb.group({
    //   firstName: 'Arvind',
    //   lastName: 'Maurya',
    //   email: 'arvind.tagline@gmail.com',
    //   password: '123456',
    //   address: this.fb.group({
    //     stat: 'Gujarat',
    //     city: 'Surat',
    //     pincode: '394221'
    //   }),
    //   mobile: this.fb.array([new FormControl()])
    // })
    this.myForm = this.fb.group({
      subjectName: 'Intro',
      questions: this.fb.array([]),
      notes: this.fb.array([]),
    })
  }

  ngOnInit() {
    this.onAdd();
    this.addNote();
  }

  public papers() {
    return this.fb.group({
      question: 'hello',
      answer: 'hey',
      options: this.fb.group({
        option1: 'A',
        option2: 'B',
        option3: 'C',
        option4: 'D'
      })
    })
  }

  // public getData(this.myForm.value) {
  //   console.log('object :>> ', object);
  // }

  //testing code start

  // get mbData() {
  //   return this.myForm.get('mobile') as FormArray;
  // }

  // public addNumber() {
  //   this.mbData.push(new FormControl(''))
  // }
  // public onSubmit() {
  //   console.log('this.myForm.value :>> ', this.myForm.value);
  // }
  //testing code end 

  //add Question start
  public onAdd() {
    this.questions = this.myForm.get('questions') as FormArray;
    this.questions.push(this.papers());
  }
  //add Question end


  //Add notes start
  get noteData() {
    return this.myForm.get('notes') as FormArray;
  }
  public addNote() {
    this.noteData.push(new FormControl(''))
  }
  //Add notes end

  public createExam() {
    const { subjectName, questions, notes } = this.myForm.value;
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
        this.toastr.success(res.message);
      },
      error: (err) => {
        this.toastr.error(err);
      }
    })

  }
}

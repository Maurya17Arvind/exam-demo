import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  public name!: string | null;
  public email!: string | null;
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('studentName')
    this.email = localStorage.getItem('studentEmail')
  }

}

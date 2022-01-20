import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  public name!: string | null;
  public email!: string | null;
  constructor(private teacherService: UsersService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    // this.teacherService.loginData().subscribe()
  }

}

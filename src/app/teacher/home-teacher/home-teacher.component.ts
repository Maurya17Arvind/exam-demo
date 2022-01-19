import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  constructor(private teacherService: UsersService) { }

  ngOnInit(): void {

    // this.teacherService.loginData().subscribe()
  }

}

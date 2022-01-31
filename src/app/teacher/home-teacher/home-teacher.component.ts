import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  public name!: string | null;
  public email!: string | null;

  constructor(private teacherService: UsersService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('teacherName');
    this.email = localStorage.getItem('teacherEmail');
  }

  // public cards = [
  //   {
  //     image: 'assets/img1.jpeg',
  //     title: 'Card title',
  //     button: 'Button'
  //   }
  // ]
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  public name!: string | null;
  public email!: string | null;
  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';

  constructor(
    private swPush: SwPush,
  ) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('teacherName');
    this.email = localStorage.getItem('teacherEmail');
  }

}

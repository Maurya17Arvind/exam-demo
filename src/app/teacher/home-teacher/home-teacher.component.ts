import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from 'src/app/notification.service';
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
  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';

  constructor(
    private teacherService: UsersService,
    private swPush: SwPush,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('teacherName');
    this.email = localStorage.getItem('teacherEmail');
  }

  submitNotification(): void {
    this.notificationService.subscribeToNotification();
  }

  // public cards = [
  //   {
  //     image: 'assets/img1.jpeg',
  //     title: 'Card title',
  //     button: 'Button'
  //   }
  // ]
}

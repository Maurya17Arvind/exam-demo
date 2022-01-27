import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean = true;
  public name!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    if (localStorage.getItem('teacherRole')) {
      this.name = localStorage.getItem('teacherName')
    } else {
      this.name = localStorage.getItem('studentName')
    }
  }

  public clearToken() {
    localStorage.clear();
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

}

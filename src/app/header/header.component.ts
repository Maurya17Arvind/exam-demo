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

    this.name = localStorage.getItem('name')
  }

  public clearToken() {
    localStorage.removeItem("token");
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

}

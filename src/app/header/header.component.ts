import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  public clearToken() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}

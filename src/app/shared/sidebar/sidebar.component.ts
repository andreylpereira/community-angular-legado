import { LoginService } from 'src/app/services/login.service';
import { AuthGuardService } from './../../services/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  theme: any;
  isAuth: boolean = false;

  constructor(private auth: AuthGuardService, private loginService: LoginService) {
    this.isAuth = this.auth.canActivate();
  }

  ngOnInit(): void {
    this.theme = localStorage.getItem('color-theme');
    document.documentElement.classList.add(this.theme);

  }

  public toogle() {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        this.theme = 'dark';
        localStorage.setItem('color-theme', this.theme);
      } else {
        document.documentElement.classList.remove('dark');
        this.theme = 'light';
        localStorage.setItem('color-theme', this.theme);
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        this.theme = 'light';
        localStorage.setItem('color-theme', this.theme);
      } else {
        document.documentElement.classList.add('dark');
        this.theme = 'dark';
        localStorage.setItem('color-theme', this.theme);
      }
    }
  }

  public logout() {
    this.loginService.logOut();
  }
}

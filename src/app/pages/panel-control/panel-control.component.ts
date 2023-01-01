import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
  theme: any;
  isAuth: boolean = false;

  constructor(private auth: AuthGuardService) {
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
    }}


}

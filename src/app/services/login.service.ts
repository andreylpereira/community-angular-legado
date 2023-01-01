import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Login from '../../app/models/login.model'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  private user: {
    id: number;
    firstName: string;
    lastName: string;
    token: string;
  } = {
    id: 0,
    firstName: '',
    lastName: '',
    token: '',
  };

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8888/api/auth/login';
  }

  login(user: Login) {
    return this.http.post<Login>(this.url, user).subscribe(res => console.log(res)
    )
  }

  getUser() {
    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);
    if (data !== null) {
      this.user.id = data.id;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.token = data.token;
      return this.user;
    } else {
      return null;
    }
  }


}



import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);


    if (data !== null) {

      req = req.clone({
        setHeaders: {
          Authorization: data?.token,
        },
      });


    }
    return next.handle(req);
  }
}

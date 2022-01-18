import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public token = this.userService.token ? this.userService.token : localStorage.getItem('token');

  constructor(private userService: UsersService) {
    
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { 'access-token': `${this.token}`},
    });
    return next.handle(request);
  }
}

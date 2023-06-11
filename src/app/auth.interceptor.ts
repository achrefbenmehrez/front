import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(clonedReq).pipe(
        catchError((error) => {
          if (error instanceof HttpResponse) {
            if (error.status === 401 || error.status === 403) {
              localStorage.removeItem('token');
              this.router.navigateByUrl('/login');
            } else if (error.status === 404) {
              // handle 404 error here
              console.log('404 error');
            }
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(req.clone());
    }
  }
}

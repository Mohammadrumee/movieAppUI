import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// @Injectable()


export class DbInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '632270824b91c00c197f61e8';

    httpRequest = httpRequest.clone({
      headers : httpRequest.headers.set('x-apikey', API_KEY)
    });

    console.log(httpRequest);

    return next.handle(httpRequest);
  }
}

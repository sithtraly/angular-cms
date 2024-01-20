import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken()
    if (token) { }
    const authReq = req.clone({
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
    })
    return next.handle(authReq).pipe(tap(() => { }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401 || err.status == 403) {
          this.authService.logout()
        } else {
          return
        }
      }
    }))
  }
}
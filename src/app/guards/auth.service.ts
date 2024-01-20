import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { RouterService } from '../services/router.service';
import { HttpService } from '../services/http.service';
import { SnackbarService } from '../services/snackbar.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticate: boolean = false

  constructor(
    private routerService: RouterService,
    private httpService: HttpService,
    private snackbar: SnackbarService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token')
      if (token) this.isAuthenticate = true
    }
    if (this.isAuthenticate) {
      return true
    } else {
      this.routerService.routeTo('login')
      return false
    }
  }

  getToken(): any {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token')
    }
  }

  login(username?: string, password?: string) {
    if (username?.length == 0 || password?.length == 0) {
      return
    }
    this.http.post(environment.apiUrl + '/auth/login', { username, password }).subscribe((res: any) => {
      const token = res.access_token
      const info = res
      delete info.access_token
      this.isAuthenticate = true
      localStorage.setItem('token', token)
      localStorage.setItem('info', JSON.stringify(info))
      this.routerService.routeTo('/')
    }, (err: HttpErrorResponse) => {
      if (err.status == 401) {
        this.snackbar.error('Username or Password incorrect')
      }
    })
  }

  logout() {
    this.isAuthenticate = false
    localStorage.removeItem('token')
    localStorage.removeItem('info')
    this.routerService.routeTo('/login')
  }
}

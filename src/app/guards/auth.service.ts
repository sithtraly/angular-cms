import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { RouterService } from '../services/router.service';
import { HttpService } from '../services/http.service';
import { SnackbarService } from '../services/snackbar.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { CustomTraslateService } from '../services/custom.traslate.service';

interface UserProfile {
  username: string
  roleId: number
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated: boolean = false
  private userProfileSubject = new BehaviorSubject<UserProfile | null>(null);

  constructor(
    private routerService: RouterService,
    private httpService: HttpService,
    private snackbar: SnackbarService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: CustomTraslateService
  ) { }

  isAuthenticatedUser(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token')
      if (token) this.isAuthenticated = true
    }
    if (this.isAuthenticated) {
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
      this.isAuthenticated = true
      const userProfile: UserProfile = { username: info.username, roleId: info.roleId }
      this.userProfileSubject.next(userProfile)
      localStorage.setItem('token', token)
      localStorage.setItem('info', JSON.stringify(info))
      this.routerService.routeTo('/')
    }, (err: HttpErrorResponse) => {
      if (err.status == 401) {
        this.snackbar.error(this.translate.getTranslate('username_or_password_incorrect'), 'close')
      }
    })
  }

  logout() {
    this.isAuthenticated = false
    this.userProfileSubject.next(null)
    localStorage.removeItem('token')
    localStorage.removeItem('info')
    this.routerService.routeTo('/login')
  }

  getUserProfile(): UserProfile | null {
    return this.userProfileSubject.value
  }
}

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { RouterService } from "../services/router.service";

@Injectable({ providedIn: 'root' })
export class RoleGuardAdmin implements CanActivate {
  constructor(
    private authService: AuthService,
    private routerService: RouterService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const userProfile = this.authService.getUserProfile()
    if (userProfile && userProfile.roleId == 1) {
      // 1 = admin
      // 2 = teacher
      // 3 = student
      return true
    }
    this.routerService.routeTo('/unauthorized')
    return false
  }
}
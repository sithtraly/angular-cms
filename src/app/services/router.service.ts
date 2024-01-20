import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(
    private router: Router
  ) { }

  routeTo(target: string, extra?: any) {
    this.router.navigateByUrl(target, extra);
  }
}

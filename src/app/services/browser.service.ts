import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor() { }

  isEdge() {
    return /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
  }
}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTraslateService {
  constructor(
    private traslateService: TranslateService
  ) { }

  useLang(lang: string) {
    this.traslateService.use(lang)
    localStorage.setItem('lang', lang)
  }

  getLang() {
    return this.traslateService.currentLang
  }

  getTranslate(key: string) {
    this.traslateService.get(key)
  }
}

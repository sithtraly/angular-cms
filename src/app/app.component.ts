import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-cms';

  constructor(
    private traslate: TranslateService
  ) {}

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      const currentLanguage = localStorage.getItem('lang') || 'kh'
      this.traslate.setDefaultLang(currentLanguage)
      this.traslate.use(currentLanguage)
    }
  }
}

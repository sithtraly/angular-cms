import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CustomTraslateService } from '../../services/custom.traslate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private httpService: HttpService,
    private translate: CustomTraslateService
  ) { }

  onClick() {
    this.httpService.get('/users').subscribe((res: any) => {}, (err: any) => {})
  }

  changeLang(lang: string) {
    this.translate.useLang(lang)
  }
}

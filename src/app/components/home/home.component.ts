import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private httpService: HttpService
  ) { }

  onClick() {
    this.httpService.get('/users').subscribe((res: any) => {}, (err: any) => {})
  }
}

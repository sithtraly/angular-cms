import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(
    public routerService: RouterService
  ) {}
}

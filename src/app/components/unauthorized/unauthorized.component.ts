import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss', '../not-found/not-found.component.scss']
})
export class UnauthorizedComponent {
  constructor(
    public routerService: RouterService
  ) { }

  onBackHome() {
    event?.preventDefault()
    this.routerService.routeTo('/login')
  }
}

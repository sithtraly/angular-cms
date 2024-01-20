import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(
    public routerService: RouterService
  ) { }
}

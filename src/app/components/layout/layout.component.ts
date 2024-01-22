import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { AuthService } from '../../guards/auth.service';
import { CustomTraslateService } from '../../services/custom.traslate.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(
    public routerService: RouterService,
    public authService: AuthService,
    private translateService: CustomTraslateService
  ) { }

  translateTo(lang: string) {
    this.translateService.useLang(lang)
  }
}

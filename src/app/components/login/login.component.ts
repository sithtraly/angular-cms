import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  inputGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    public routerService: RouterService,
    private authService: AuthService
  ) { }

  onLogin() {
    const info = this.inputGroup.value
    this.authService.login(info.username?.toString(), info.password?.toString())
  }
}

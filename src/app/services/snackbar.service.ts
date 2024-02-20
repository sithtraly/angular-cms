import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/common/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private icons = {
    error: 'report',
    warning: 'warning',
    success: 'check_circle',
    info: 'info',
  }

  constructor(
    private snack: MatSnackBar,
  ) { }

  open(message: string, actionText: string = 'OK') {
    this.snack.openFromComponent(SnackbarComponent, { data: { message, actionText, icon: this.icons.success, cssClass: '' } })
  }

  error(message: string, actionText: string = 'OK') {
    this.snack.openFromComponent(SnackbarComponent, { data: { message, actionText, icon: this.icons.error, cssClass: 'error' } })
  }

  warning(message: string, actionText: string = 'OK') {
    this.snack.openFromComponent(SnackbarComponent, { data: { message, actionText, icon: this.icons.warning, cssClass: 'warning' } })
  }

  info(message: string, actionText: string = 'OK') {
    this.snack.openFromComponent(SnackbarComponent, { data: { message, actionText, icon: this.icons.info, cssClass: 'info' } })
  }
}

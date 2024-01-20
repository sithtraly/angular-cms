import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(
    private snack: MatSnackBar
  ) { }

  error(message: string) {
    this.snack.open(message, 'OK')
  }
}

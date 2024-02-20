import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-qr-code-dialog',
  templateUrl: './new-qr-code-dialog.component.html',
  styleUrl: './new-qr-code-dialog.component.scss'
})
export class NewQrCodeDialogComponent {
  inputGroup = new FormGroup({
    lat1: new FormControl(''),
    lat2: new FormControl(''),
    lon1: new FormControl(''),
    lon2: new FormControl(''),
  })

  constructor(
    private dialogRef: DialogRef
  ) { }
}

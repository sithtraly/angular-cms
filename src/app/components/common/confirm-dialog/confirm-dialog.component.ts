import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss', '../snackbar/snackbar.component.scss']
})
export class ConfirmDialogComponent {
  title: string
  message: string
  icon: string
  okText: string
  cancelText: string

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.title = data.title
    this.message = data.message
    this.okText = data.okText
    this.cancelText = data.cancelText
    this.icon = data.type
  }

  onCancel() {
    this.dialogRef.close(false)
  }

  onSave() {
    this.dialogRef.close(true)
  }
}

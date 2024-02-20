import { ComponentType } from '@angular/cdk/portal';
import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/common/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private dialog: MatDialog
  ) { }

  openDialogFromComponent(component: ComponentType<any>, data: any, callback: any) {
    this.dialog.open(component, { data }).afterClosed().subscribe((resspone: any) => { return callback(resspone) })
  }

  /**
   * 
   * @param { string } type the is a few type you can use like:
   * - success (default)
   * - error
   * - info
   * - warning
   * 
   * all of these choice will change icon and color
   * 
   * @returns return when use click confirm or close true/undefined
   */
  openConfirmDialog({
    okText = 'Ok',
    cancelText = 'Cancel',
    title = 'Confirm Dialog',
    message = 'success',
    type = 'done',
    callback = (res: any) => { }
  }) {
    const data = { okText, cancelText, title, type, message }
    this.dialog.open(ConfirmDialogComponent, { data, width: '400px' }).afterClosed().subscribe((response: any) => callback(response))
  }
}

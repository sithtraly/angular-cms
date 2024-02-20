import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { DateUtil } from '../../utils/date.util';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../common/image-dialog/image-dialog.component';
import { DialogService } from '../../services/dialog.service';
import { NewQrCodeDialogComponent } from '../common/new-qr-code-dialog/new-qr-code-dialog.component';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {
  baseUrl = environment.apiUrl
  columnHeader = ['id', 'latitude1', 'longitude1', 'latitude2', 'longitude2', 'create_date', 'image']
  dataSource: any

  constructor(
    private httpService: HttpService,
    // private dialog: MatDialog
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getQrs()
  }

  getQrs() {
    this.httpService.get('/qr').subscribe((res: any) => {
      const data = res.map((obj: any) => {
        obj.latitude1 = obj.lat1; delete obj.lat1
        obj.latitude2 = obj.lat2; delete obj.lat2
        obj.longitude1 = obj.lon1; delete obj.lon1
        obj.longitude2 = obj.lon2; delete obj.lon2
        obj.create_date = DateUtil.standardDateAndTime(obj.createdAt); delete obj.createdAt
        obj.image = `${this.baseUrl}/public/qr/${obj.file}`; delete obj.file
        return obj
      })

      this.dataSource = data
    })
  }

  openImage(image: string | any) {
    // const dialogRef = this.dialog.open(ImageDialogComponent, { data: { image } })
    // dialogRef.afterClosed().subscribe((respone) => { })
    this.dialogService.openDialogFromComponent(ImageDialogComponent, { image }, (res: any) => { })
  }

  onOpenNewDialog() {
    this.dialogService.openDialogFromComponent(ConfirmDialogComponent, {}, (res: any) => console.log(res))
  }
}

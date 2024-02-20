import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQrCodeDialogComponent } from './new-qr-code-dialog.component';

describe('NewQrCodeDialogComponent', () => {
  let component: NewQrCodeDialogComponent;
  let fixture: ComponentFixture<NewQrCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewQrCodeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewQrCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

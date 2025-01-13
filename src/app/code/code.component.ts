import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  qrData: string = '';  // Declare qrData property
  qrCodeUrl: string = '';  // Declare qrCodeUrl property

  updateQrData(): void {
    // This method generates the QR code URL based on qrData
    if (this.qrData) {
      this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(this.qrData)}&size=150x150`;
    } else {
      this.qrCodeUrl = '';  // Clear QR code URL if qrData is empty
    }
  }
}

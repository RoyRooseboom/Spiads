import { Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
})
export class SignaturePadComponent {
  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement, {});
  }

  startDrawing(event: Event) {}

  moved(event: Event) {}

  savePad(): string {
    this.signatureNeeded = this.signaturePad.isEmpty();

    if (!this.signatureNeeded) {
      this.signatureImg = this.signaturePad.toDataURL();
    }

    return this.signatureImg;
  }

  clearPad() {
    this.signaturePad.clear();
  }
}

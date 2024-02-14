import { Component, ElementRef, ViewChild } from '@angular/core';
import { InschrijvenService } from './service/inschrijven.service';
import { SignaturePadComponent } from '../shared/signature-pad/signature-pad.component';

@Component({
  selector: 'inschrijven',
  templateUrl: './inschrijven.component.html',
  styleUrls: ['./inschrijven.component.scss'],
})
export class InschrijvenComponent {
  @ViewChild('naam') naam: ElementRef = {} as ElementRef;
  @ViewChild('achternaam') achternaam: ElementRef = {} as ElementRef;
  @ViewChild('email') email: ElementRef = {} as ElementRef;
  @ViewChild('adress') adress: ElementRef = {} as ElementRef;
  @ViewChild('postcode') postcode: ElementRef = {} as ElementRef;
  @ViewChild('woonplaats') woonplaats: ElementRef = {} as ElementRef;
  @ViewChild('iban') iban: ElementRef = {} as ElementRef;
  @ViewChild('handtekening') handtekening: SignaturePadComponent =
    {} as SignaturePadComponent;

  error = '';

  constructor(private inschrijvenService: InschrijvenService) {}

  emptyCheck() {
    if (
      this.naam.nativeElement.value != '' &&
      this.achternaam.nativeElement.value != '' &&
      this.email.nativeElement.value != '' &&
      this.adress.nativeElement.value != '' &&
      this.postcode.nativeElement.value != '' &&
      this.woonplaats.nativeElement.value != '' &&
      this.iban.nativeElement.value != '' &&
      this.handtekening != undefined
    ) {
      this.send();
    } else {
      this.setError();
    }
  }

  send() {
    let body: {
      naam: string;
      achternaam: string;
      email: string;
      adress: string;
      postcode: string;
      woonplaats: string;
      iban: string;
      handtekening: string;
    } = {
      naam: this.naam.nativeElement.value,
      achternaam: this.achternaam.nativeElement.value,
      email: this.email.nativeElement.value,
      adress: this.adress.nativeElement.value,
      postcode: this.postcode.nativeElement.value,
      woonplaats: this.woonplaats.nativeElement.value,
      iban: this.iban.nativeElement.value,
      handtekening: this.handtekening.savePad(),
    };

    this.inschrijvenService.addInschrijven(body);
  }

  setError() {
    const color = 'tomato';
    this.error = 'Niet alle velden zijn ingevuld!';
    this.naam.nativeElement.style.backgroundColor = color;
    this.achternaam.nativeElement.style.backgroundColor = color;
    this.email.nativeElement.style.backgroundColor = color;
    this.adress.nativeElement.style.backgroundColor = color;
    this.postcode.nativeElement.style.backgroundColor = color;
    this.woonplaats.nativeElement.style.backgroundColor = color;
    this.iban.nativeElement.style.backgroundColor = color;
  }
}

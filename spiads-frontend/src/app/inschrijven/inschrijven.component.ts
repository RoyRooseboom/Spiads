import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { InschrijvenService } from './service/inschrijven.service';
import { SignaturePadComponent } from '../shared/signature-pad/signature-pad.component';
import { catchError, of, tap } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'inschrijven',
  templateUrl: './inschrijven.component.html',
  styleUrls: ['./inschrijven.component.scss'],
})
export class InschrijvenComponent {
  lid: {
    naam: string;
    achternaam: string;
    email: string;
    adress: string;
    postcode: string;
    woonplaats: string;
    iban: string;
    handtekening: string;
  } = {
    naam: '',
    achternaam: '',
    email: '',
    adress: '',
    postcode: '',
    woonplaats: '',
    iban: '',
    handtekening: '',
  };

  @ViewChild('handtekening') signaturePad: SignaturePadComponent =
    {} as SignaturePadComponent;

  verplichtText = 'Dit veldt is verplicht';
  toastHeader = '';
  toastText = '';
  show: boolean = false;

  constructor(private inschrijvenService: InschrijvenService) {}

  checkSignaturePad(): boolean {
    this.lid.handtekening = '';
    this.lid.handtekening = this.signaturePad.savePad();

    if (
      this.lid.handtekening != null &&
      this.lid.handtekening != '' &&
      this.lid.handtekening != undefined
    ) {
      return true;
    }

    return false;
  }

  send() {
    if (this.checkSignaturePad()) {
      this.inschrijvenService
        .addInschrijven(this.lid)
        .pipe(
          tap((resp: HttpResponse<any>) => {
            this.toastHeader = 'Succes!';
            this.toastText = 'Inschrijving is met succes verstuurd.';
            this.show = true;
          }),
          catchError((err) => {
            this.toastHeader = 'Failed!';
            this.toastText = 'Inschrijving Mislukt!';
            this.show = true;

            console.error('Error occured: ', err);
            return of(-1);
          })
        )
        .subscribe();
    }

    this.show = false;
  }
}

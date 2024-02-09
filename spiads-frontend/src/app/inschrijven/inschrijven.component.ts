import { Component, ElementRef, ViewChild } from '@angular/core';
import { InschrijvenService } from './service/inschrijven.service';

@Component({
  selector: 'inschrijven',
  templateUrl: './inschrijven.component.html',
  styleUrls: ['./inschrijven.component.scss'],
})
export class InschrijvenComponent {
  @ViewChild('naam') naam: ElementRef = {} as ElementRef;
  @ViewChild('achternaam') achternaam: ElementRef = {} as ElementRef;
  @ViewChild('email') email: ElementRef = {} as ElementRef;

  constructor(private inschrijvenService: InschrijvenService) {}

  send() {
    let body: { naam: string; achternaam: string; email: string } = {
      naam: this.naam.nativeElement.value,
      achternaam: this.achternaam.nativeElement.value,
      email: this.email.nativeElement.value,
    };

    this.inschrijvenService.addInschrijven(body);
  }
}

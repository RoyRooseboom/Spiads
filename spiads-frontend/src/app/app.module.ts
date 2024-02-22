import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InschrijvenComponent } from './inschrijven/inschrijven.component';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadComponent } from './shared/signature-pad/signature-pad.component';
import { FormsModule } from '@angular/forms';
import { TekstveldComponent } from './tekstveld/tekstveld.component';

@NgModule({
  declarations: [
    AppComponent,
    InschrijvenComponent,
    SignaturePadComponent,
    TekstveldComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SignaturePadComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

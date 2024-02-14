import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InschrijvenComponent } from './inschrijven/inschrijven.component';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadComponent } from './shared/signature-pad/signature-pad.component';

@NgModule({
  declarations: [AppComponent, InschrijvenComponent, SignaturePadComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

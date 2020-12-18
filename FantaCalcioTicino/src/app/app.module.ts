import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';
import { FormazioneComponent } from './page/formazione/formazione.component';
import { LiveComponent } from './page/live/live.component';
import { ClassificaComponent } from './page/classifica/classifica.component';
import { RegolamentoComponent } from './page/regolamento/regolamento.component';
import { AccountComponent } from './page/account/account.component';
import { GestioneComponent } from './page/gestione/gestione.component';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    FormazioneComponent,
    LiveComponent,
    ClassificaComponent,
    RegolamentoComponent,
    AccountComponent,
    GestioneComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

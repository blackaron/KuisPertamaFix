import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TugasComponent } from './tugas/tugas.component';
import { Tugas3Component } from './tugas3/tugas3.component';

import { SharedComponent } from './shared/shared.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { HeaderComponent } from './header/header.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TugasComponent,
    Tugas3Component,
    
    SharedComponent,
    MahasiswaComponent,
    HeaderComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
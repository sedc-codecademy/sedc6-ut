import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from '../counter/counter';
import { CountingService } from '../services/counting-service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

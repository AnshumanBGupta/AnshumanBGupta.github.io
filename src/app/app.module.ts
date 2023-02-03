import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSeatsComponent } from './book-seats/book-seats.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowSeatsComponent } from './show-seats/show-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSeatsComponent,
    ShowSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

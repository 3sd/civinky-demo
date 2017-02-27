import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CivinkyService } from './civinky.service';
import { CivinkyComponent } from './civinky/civinky.component';

@NgModule({
  declarations: [
    AppComponent,
    CivinkyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CivinkyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

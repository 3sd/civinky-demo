import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CivinkyService } from './civinky.service';
import { SampleDataService } from './sampleData.service';
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
  providers: [CivinkyService, SampleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

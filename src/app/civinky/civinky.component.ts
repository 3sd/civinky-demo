import { Component, OnInit } from '@angular/core'
import { Observable }       from 'rxjs/Observable'
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser'

import { CivinkyService } from '../civinky.service'
import { SampleDataService } from '../sampleData.service'


@Component({
  selector: 'app-civinky',
  templateUrl: 'civinky.component.html',
  styleUrls: ['civinky.component.css'],
  providers: [CivinkyService]
})
export class CivinkyComponent implements OnInit {

  html: SafeHtml

  url: SafeResourceUrl

  pug: string = this.sampleData.pug

  css: string = this.sampleData.css

  json: string = this.sampleData.json

  snippet: boolean = this.sampleData.snippet

  constructor(
    private civinky: CivinkyService,
    private sampleData: SampleDataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.queryCivinky()
  }

  queryCivinky() {
    this.civinky.query(this.pug, this.css, JSON.parse(this.json), this.snippet).subscribe(
      result => {
        this.html = this.url = this.sanitizer.bypassSecurityTrustHtml(result.html)
        this.url = this.url = this.sanitizer.bypassSecurityTrustResourceUrl(result.url)
      }
    )
  }
}

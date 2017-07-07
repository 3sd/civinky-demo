import { Injectable, ElementRef } from '@angular/core';
import { Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';


@Injectable()
export class CivinkyService {

  url =environment.civinkyUrl;

  constructor(private http: Http, private elementRef: ElementRef) { }

  query(pug, css, json, snippet) {
    let body = {
      'pug':pug,
      'css':css,
      'json':json,
      'snippet': snippet
    }
    let params = new URLSearchParams()
    let result = this.http.post(this.url, body)
      .map(res => {return {url:res.url,html:res.text().trim()}})
    return result;
  }
}

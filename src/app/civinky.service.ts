import { Injectable, ElementRef } from '@angular/core';
import { Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CivinkyService {

  url ="https://civinky.3sd.io/generate"


  constructor(private http: Http, private elementRef: ElementRef) { }

  query(pug, css, json) {
    let params = new URLSearchParams()
    params.append('pug', pug)
    params.append('css', css)
    params.append('json', json)
    let body = params.toString()
    let result = this.http.post(this.url, body)
      .map(res => {return {url:res.url,html:res.text().trim()}})
    return result;
  }
}

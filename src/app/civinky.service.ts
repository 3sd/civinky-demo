import { Injectable } from '@angular/core';
import { Http, URLSearchParams }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CivinkyService {

  url ="https://civinky.3sd.io/generate"

  constructor(private http: Http) { }

  query(pug, css, json) {
    let params = new URLSearchParams()
    params.set('pug', pug)
    params.set('css', css)
    params.set('json', json)
    return this.http.get(this.url, {search: params})
      .map(res => {return {url:res.url,html:res.text().trim()}})
  }
}

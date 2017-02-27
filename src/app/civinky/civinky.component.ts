import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CivinkyService } from '../civinky.service';


@Component({
  selector: 'app-civinky',
  templateUrl: 'civinky.component.html',
  styleUrls: ['civinky.component.css'],
  providers: [CivinkyService]
  // encapsulation: ViewEncapsulation.None,

})
export class CivinkyComponent implements OnInit {


  url: SafeResourceUrl

  urlString: string

  html: string

  pug: string = `container
 row
  columns
   spacer(size=20)
   h1 Civinky #[small Pug and Inky for CiviMail]
   spacer(size=20)
   p Hello {contact.first_name}!
   p Create responsive CiviMails that look great on any device and all of the major email clients, even Outlook!
   spacer(size=20)
   each article in articles
    h2 #{article.title}
    p #{article.body} #[a(href=article.link) read more...]
    spacer(size=20)
 row
  columns(large="6")
   callout
    h2 Credits
    p Funded by #[a(href='http://elifesciences.org/') eLife Sciences], a non-profit collaboration between the funders and practitioners of research to improve the way important results are presented and shared.
    p Code by #[a(href='mailto:michaelmcandrew@thirdsectordesign.org') Michael McAndrew], #[a(href='href:https://3sd.io') Third Sector Design]
  columns(large="6")
   callout
    h2 Get started
    p Try the online demo, or download the CiviCRM extension and set up the web service.
    button(href='http://github.com/3sd/io.3sd.civinky') Download the extension
    button(href='http://github.com/3sd/civinky-service') Set up the web service
 row
  columns.footer
   p Sent by {domain.address}.
   p #[a(href='{action.unsubscribe}') Unsubscribe from this mailing]
   p #[a(href='{action.optOutUrl}') Opt out of al future mailngs]
`
  css: string = `.footer p {font-size: 80%; color: grey}
.footer a {color: grey;}`

  json: string = JSON.stringify({
    "articles": [
      { "title": "Inky tags take the pain out of email composition", "body": "Email-client-friendly html is complex. Inky tags make it simple - never nest an HTML table again!", "link": "http://foundation.zurb.com/emails/docs/inky.html" },
      { "title": "Use Pug to create your templates", "body": "Inky tags are great, but we can do better. Pug simplfies the syntax even more. Concise is good.", "link": "https://pugjs.org/language/tags.html" },
      { "title": "Style your emails with extra CSS", "body": "Inky's base CSS is inlined automatically. Add your own styles on top of Inky to make your emails your own", "link": "http://foundation.zurb.com/emails/docs/css-guide.html" },
      { "title": "Add JSON objects from any source", "body": "Add JSON from any (trusted!) source to use in your email for use in your templates", "link": "https://pugjs.org/api/getting-started.html" },
      { "title": "Use CiviCRM tokens", "body": "Add civicrm tokens to your email as usual and they'll be interpreted by CiviCRM.", "link": "https://docs.civicrm.org/user/en/stable/common-workflows/tokens-and-mail-merge/" }
    ]
  })


  constructor(
    private civinky: CivinkyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.queryCivinky()
  }

  queryCivinky() {
    this.urlString = encodeURI(this.civinky.url + '?pug=' + this.pug + '&css=' + this.css + '&json=' + this.json)
    this.civinky.query(this.pug, this.css, this.json).subscribe(
      result => {
        this.html = result.html
        this.url = this.url = this.sanitizer.bypassSecurityTrustResourceUrl(result.url)
      }
    )
  }
}

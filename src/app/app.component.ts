import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'translate-example';
  languages = { en: 'English', sv: 'Svenska' };
  defaultLang = 'en';

  langSelected: string;

  constructor(public translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    this.langSelected =
      browserLang && browserLang.match(/en|sv/)
        ? browserLang
        : this.defaultLang;
    translate.use(this.langSelected);
  }

  get selectedLangText() {
    return this.languages[this.langSelected as keyof typeof this.languages];
  }
}

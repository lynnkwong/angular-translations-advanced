import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent {
  title = 'translate-example';
  languages = { en: 'English', sv: 'Svenska' };

  constructor(public translate: TranslateService) {}

  getLangText(lang: string): string {
    return this.languages[lang as keyof typeof this.languages];
  }
}

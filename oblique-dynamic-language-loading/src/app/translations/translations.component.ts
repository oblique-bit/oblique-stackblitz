import {Component, inject} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

type DynamicLocales = {
  locales: string[];
  defaultLanguage: string;
  disabled: boolean;
  languages: Record<string, string>;
};

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss'],
  standalone: false
})
export class TranslationsComponent {
  currentLang = inject(TranslateService).getCurrentLang()
}

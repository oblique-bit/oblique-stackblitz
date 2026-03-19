import {provideZoneChangeDetection} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {provideObliqueConfiguration} from '@oblique/oblique';
import {delay, firstValueFrom, Observable, of} from 'rxjs';
import 'zone.js';

import {AppModule} from './app/app.module';

type DynamicLocales = {
  locales: string[];
  defaultLanguage: string;
  disabled: boolean;
  languages: Record<string, string>;
};

const loadLocalesFromBackend = (): Observable<DynamicLocales> =>
  of({
    locales: ['de-CH', 'en-CH', 'es', 'fr-CH', 'it-CH'],
    defaultLanguage: 'de',
    disabled: false,
    languages: {
      de: 'Deutsch',
      en: 'English',
      es: 'Espa\u00f1ol',
      fr: 'Fran\u00e7ais',
      it: 'Italiano'
    }
  }).pipe(delay(300));

firstValueFrom(loadLocalesFromBackend())
  .then((locales) =>
    platformBrowserDynamic().bootstrapModule(AppModule, {
      applicationProviders: [
        provideZoneChangeDetection(),
        provideObliqueConfiguration({
          accessibilityStatement: {
            createdOn: new Date('2025-09-26'),
            conformity: 'none',
            applicationName: 'Oblique Translations example',
            applicationOperator:
              'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
            contact: [{email: 'oblique@bit.admin.ch'}]
          },
          translate: {
            locales
          }
        })
      ]
    })
  )
  .catch((err) => console.error(err));

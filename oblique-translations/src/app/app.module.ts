import {inject, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  ObTranslateParamsModule,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import localeENCH from '@angular/common/locales/en-CH';
import localeES from '@angular/common/locales/es';
import {TranslateModule} from '@ngx-translate/core';
import {TranslationsComponent} from './translations/translations.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

registerLocaleData(localeDECH);
registerLocaleData(localeENCH);
registerLocaleData(localeES);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
  declarations: [AppComponent, TranslationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    ObTranslateParamsModule,
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          createdOn: new Date('2025-09-26'),
          conformity: 'none',
          applicationName: "Oblique Translations example",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact: [{email: 'oblique@bit.admin.ch'}],
        },
      }),
    {provide: LOCALE_ID, useValue: 'de-CH'},
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['de-CH', 'en-CH', 'es', 'fr-CH', 'it-CH'];
  }
}

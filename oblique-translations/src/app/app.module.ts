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
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {TranslationsComponent} from './translations/translations.component';

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
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          applicationName: "Replace me with the application's name",
          applicationOperator: 'Replace me with the name and address of the federal office that exploit this application, HTML is permitted',
          contact: {/* at least 1 email or phone number has to be provided */ emails: [''], phones: ['']},
        },
      }),
    { provide: LOCALE_ID, useValue: 'de-CH' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['de-CH', 'en-CH', 'es', 'fr-CH', 'it-CH'];
  }
}

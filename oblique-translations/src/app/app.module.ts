import {inject, LOCALE_ID, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  ObTranslateParamsModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import {registerLocaleData} from "@angular/common";
import localeDECH from "@angular/common/locales/de-CH";
import localeFRCH from "@angular/common/locales/fr-CH";
import localeITCH from "@angular/common/locales/it-CH";
import localeENCH from "@angular/common/locales/en-CH";
import localeES from "@angular/common/locales/es";
import {TranslationsComponent} from "./translations/translations.component";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import {TranslatePipe} from '@ngx-translate/core';

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
    TranslatePipe,
    ObTranslateParamsModule,
  ],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-26"),
        conformity: "none",
        applicationName: "Oblique Translations example",
        applicationOperator:
          "Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern",
        contact: [{email: "oblique@bit.admin.ch"}],
      },
      translate: {
        locales: {
          locales: ['de-CH', 'en-CH', 'es', 'fr-CH', 'it-CH'],
          disabled: false,
          defaultLanguage: 'de'
        }
      }
    }),
    {provide: LOCALE_ID, useValue: "de-CH"},
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

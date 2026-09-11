import {inject, LOCALE_ID, NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  ObLanguageModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import {registerLocaleData} from "@angular/common";
import localeDECH from "@angular/common/locales/de-CH";
import localeFRCH from "@angular/common/locales/fr-CH";
import localeITCH from "@angular/common/locales/it-CH";
import localeEN from "@angular/common/locales/en";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";


registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);
registerLocaleData(localeEN);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    ObLanguageModule
  ],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-25"),
        conformity: "none",
        applicationName: "Oblique Language change on date pipe example",
        applicationOperator:
          "Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern",
        contact: [{email: "oblique@bit.admin.ch"}],
      },
      translate: {
        locales: {
          locales: ['de-CH', 'en-US'],
          defaultLanguage: 'de',
          disabled: false
        }
      }
    }),
    {provide: LOCALE_ID, useValue: "de-CH"},
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig);
    masterLayoutConfig.homePageRoute =
      "/oblique-language-change-on-date-pipe-example";
  }
}

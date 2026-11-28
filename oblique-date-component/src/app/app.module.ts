import { LOCALE_ID, NgModule, inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslatePipe } from "@ngx-translate/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ObLanguageModule,
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import { registerLocaleData } from "@angular/common";
import localeDECH from "@angular/common/locales/de-CH";
import localeFRCH from "@angular/common/locales/fr-CH";
import localeITCH from "@angular/common/locales/it-CH";
import localeENCH from "@angular/common/locales/en-CH";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import { HomeComponent } from "./home/home.component";

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);
registerLocaleData(localeENCH);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    ObLanguageModule,
    TranslatePipe,
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-25"),
        conformity: "none",
        applicationName: "Oblique ObDateComponent example",
        applicationOperator: "accessibility-statement.address",
        contact: [{ email: "oblique@bit.admin.ch" }],
      },
      translate: {
        locales: {
          locales: ["de-CH", "fr-CH", "it-CH", "en-CH"],
          defaultLanguage: "en",
        },
      },
    }),
    { provide: LOCALE_ID, useValue: "en-CH" },
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig);
    masterLayoutConfig.homePageRoute = "/oblique-date-component";
  }
}

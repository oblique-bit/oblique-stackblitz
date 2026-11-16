import { LOCALE_ID, NgModule, inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import { registerLocaleData } from "@angular/common";
import localeENCH from "@angular/common/locales/en-CH";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { SubPageComponent } from "./sub-page/sub-page.component";
import { TranslatePipe } from "@ngx-translate/core";

registerLocaleData(localeENCH);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    TranslatePipe,
  ],
  declarations: [AppComponent, HomeComponent, SubPageComponent],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-25"),
        conformity: "none",
        applicationName: "Oblique: Bug Report Template",
        applicationOperator: "accessibility-statement.address",
        contact: [{ email: "oblique@bit.admin.ch" }],
      },
      translate: { locales: { locales: ["en-CH"] } },
    }),
    { provide: LOCALE_ID, useValue: "en-CH" },
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig);
    masterLayoutConfig.homePageRoute = "/oblique-bug-report-template-new";
  }
}

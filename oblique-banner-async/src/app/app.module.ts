
import {LOCALE_ID, NgModule, inject, provideAppInitializer, signal} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  ObTBanner,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import {registerLocaleData} from "@angular/common";
import localeDECH from "@angular/common/locales/de-CH";
import localeFRCH from "@angular/common/locales/fr-CH";
import localeITCH from "@angular/common/locales/it-CH";
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
  withXhr,
  HttpClient,
} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {fakeBannerInterceptor} from "./fake-banner.interceptor";
import {firstValueFrom} from "rxjs";

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

const banner = signal<ObTBanner>(undefined);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-25"),
        conformity: "none",
        applicationName: "Oblique Banner Async example",
        applicationOperator:
          "Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern",
        contact: [{email: "oblique@bit.admin.ch"}],
      },
      banner,
    }),
    provideAppInitializer(() => {
      const http = inject(HttpClient);

      http.get<ObTBanner>("/api/banner").subscribe(response => {
        banner.set(response);
      });
    }),
    {provide: LOCALE_ID, useValue: "de-CH"},
    provideHttpClient(
      withXhr(),
      withInterceptorsFromDi(),
      withInterceptors([fakeBannerInterceptor]),
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig);
    masterLayoutConfig.homePageRoute = "/oblique-banner";
  }
}


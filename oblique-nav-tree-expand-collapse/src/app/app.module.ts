import { LOCALE_ID, NgModule, inject } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ObButtonModule,
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  ObNavTreeModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import { registerLocaleData } from "@angular/common";
import localeENCH from "@angular/common/locales/en-CH";
import { HomeComponent } from "./home/home.component";
import { MatButtonModule } from "@angular/material/button";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import { TranslatePipe } from "@ngx-translate/core";

registerLocaleData(localeENCH);

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObButtonModule,
    MatButtonModule,
    ObNavTreeModule,
    ObMasterLayoutModule,
    TranslatePipe,
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-26"),
        conformity: "none",
        applicationName: "Oblique Nav Tree Expand / Collapse example",
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
    masterLayoutConfig.homePageRoute = "/oblique-nav-tree-expand-collapse";
  }
}

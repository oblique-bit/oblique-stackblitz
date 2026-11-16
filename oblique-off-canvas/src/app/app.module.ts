import { LOCALE_ID, NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import localeENCH from "@angular/common/locales/en-CH";
import { AppComponent } from "./app.component";
import {
  ObMasterLayoutConfig,
  ObMasterLayoutModule,
  ObOffCanvasModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import { OffCanvasContainerComponent } from "./off-canvas/off-canvas-container.component";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import { TranslatePipe } from "@ngx-translate/core";

registerLocaleData(localeENCH);

const routes: Routes = [{ path: "", component: OffCanvasContainerComponent }] as const;

@NgModule({
  imports: [BrowserModule, ObMasterLayoutModule, ObOffCanvasModule, TranslatePipe],
  declarations: [AppComponent, OffCanvasContainerComponent],
  providers: [
    provideRouter(routes),
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-26"),
        conformity: "none",
        applicationName: "Oblique Off Canvas example",
        applicationOperator: "accessibility-statement.address",
        contact: [{ email: "oblique@bit.admin.ch" }],
      },
      translate: { locales: { locales: ["en-CH"] } },
    }),
    { provide: LOCALE_ID, useValue: "en-CH" },
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: ObMasterLayoutConfig) {
    config.layout.hasOffCanvas = true;
  }
}

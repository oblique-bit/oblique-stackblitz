import { registerLocaleData } from "@angular/common";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import localeDECH from "@angular/common/locales/de-CH";
import localeENCH from "@angular/common/locales/en-CH";
import localeES from "@angular/common/locales/es";
import localeFRCH from "@angular/common/locales/fr-CH";
import localeITCH from "@angular/common/locales/it-CH";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ObMasterLayoutModule } from "@oblique/oblique";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TranslationsComponent } from "./translations/translations.component";
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
    TranslatePipe
  ],
  providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ObIconModule,
  ObMasterLayoutModule,
  ObColumnLayoutModule,
  multiTranslateLoader,
} from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    ObColumnLayoutModule,
    BrowserAnimationsModule,
    ObIconModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(multiTranslateLoader()),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

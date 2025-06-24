import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  OB_BANNER,
  ObBreadcrumbModule,
  ObMasterLayoutModule,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {BreadcrumbSampleComponent} from './breadcrumb-sample/breadcrumb-sample.component';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
  declarations: [AppComponent, BreadcrumbSampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    ObBreadcrumbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement: {
          applicationName: "Oblique Breadcrumb example",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact: {emails: ['oblique@bit.admin.ch']},
        },
      }),
    {provide: LOCALE_ID, useValue: 'de-CH'},
    {provide: OB_BANNER, useValue: {text: 'DEMO'}},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

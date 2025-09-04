import {inject, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ObMasterLayoutModule,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {HomeComponent} from './home/home.component';
import {SubPageComponent} from './sub-page/sub-page.component';
import {ObMasterLayoutConfig} from '@oblique/oblique';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubPageComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    TranslateModule
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          applicationName: "Oblique: Bug Report Template",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact: {emails: ['oblique@bit.admin.ch']},
        },
      }),
    {provide: LOCALE_ID, useValue: 'de-CH'},
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig)
    masterLayoutConfig.homePageRoute = "/oblique-bug-report-template-new";
  };
}

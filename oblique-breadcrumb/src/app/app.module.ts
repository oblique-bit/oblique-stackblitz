import {inject, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  OB_BANNER,
  ObBreadcrumbModule,
  ObMasterLayoutModule,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {TranslateModule} from '@ngx-translate/core';
import {BreadcrumbSampleComponent} from './breadcrumb-sample/breadcrumb-sample.component';
import {ObMasterLayoutConfig} from '@oblique/oblique';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

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
    
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement: {
				createdOn: new Date('2025-09-25'),
				conformity: 'none',
          applicationName: "Oblique Breadcrumb example",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact:[{email: 'oblique@bit.admin.ch'}],
        },
      }),
    {provide: LOCALE_ID, useValue: 'de-CH'},
    {provide: OB_BANNER, useValue: {text: 'DEMO'}},
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig)
    masterLayoutConfig.homePageRoute = "/oblique-breadcrumb";
  };
}

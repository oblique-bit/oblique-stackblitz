import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ObMasterLayoutModule,
  ObNavTreeModule,
  provideObliqueConfiguration,
  ObMasterLayoutConfig
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AsyncPipe, registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {HomeComponent} from './home/home.component';
import {inject} from '@angular/core';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObNavTreeModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    TranslateModule,
    AsyncPipe
  ],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement:
      {
        createdOn: new Date('2025-09-26'),
        conformity: 'none',
        applicationName: "Oblique Nav Tree with data from a service example",
        applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
        contact: [{email: 'oblique@bit.admin.ch'}],
      },
    }),
    {provide: LOCALE_ID, useValue: 'de-CH'},
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const masterLayoutConfig = inject(ObMasterLayoutConfig);
    masterLayoutConfig.homePageRoute = "/oblique-nav-tree-service";
  };
}

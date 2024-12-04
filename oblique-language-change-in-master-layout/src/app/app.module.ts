import { inject, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ObIconModule,
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  multiTranslateLoader,
} from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import localeENCH from '@angular/common/locales/en-CH';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { ObLanguageService } from '@oblique/oblique';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);
registerLocaleData(localeENCH);

@NgModule({
  declarations: [AppComponent, DatepickerSampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    MatInputModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    ObIconModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(multiTranslateLoader()),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-CH' },
    provideMomentDateAdapter(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['de-CH', 'en-CH'];
  }
}

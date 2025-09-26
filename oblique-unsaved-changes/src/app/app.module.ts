import {inject, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ObMasterLayoutModule,
  ObUnsavedChangesModule,
  ObAlertModule,
  ObButtonModule,
  ObMasterLayoutConfig,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JsonPipe, registerLocaleData} from '@angular/common';
import {HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import localeENCH from '@angular/common/locales/en-CH';
import {TranslateModule} from '@ngx-translate/core';
import {UnsavedChangesComponent} from './unsaved-changes/unsaved-changes.component';
import {OtherPageComponent} from './other-page/other-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

registerLocaleData(localeENCH);

@NgModule({
  declarations: [AppComponent, UnsavedChangesComponent, OtherPageComponent],
  imports: [
    BrowserModule,
    ObUnsavedChangesModule,
    ObAlertModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    JsonPipe,
    MatInputModule,
    MatButtonModule,
    ObButtonModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          createdOn: new Date('2025-09-26'),
          conformity: 'none',
          applicationName: "Oblique Unsaved Changes example",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact: [{email: 'oblique@bit.admin.ch'}],
        },
      }),
    {provide: LOCALE_ID, useValue: 'en-US'},
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['en-CH'];
  }
}

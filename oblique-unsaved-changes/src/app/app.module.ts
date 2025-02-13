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
import {HttpClientModule} from '@angular/common/http';
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
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          applicationName: "Replace me with the application's name",
          applicationOperator: 'Replace me with the name and address of the federal office that exploit this application, HTML is permitted',
          contact: {/* at least 1 email or phone number has to be provided */}
        },
      }),
    {provide: LOCALE_ID, useValue: 'en-US'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['en-CH'];
  }
}

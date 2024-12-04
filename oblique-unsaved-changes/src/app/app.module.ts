import { inject, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ObIconModule,
  ObMasterLayoutModule,
  multiTranslateLoader,
  ObUnsavedChangesModule,
  ObAlertModule,
  ObButtonModule,
  ObMasterLayoutConfig,
} from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonPipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeENCH from '@angular/common/locales/en-CH';
import { TranslateModule } from '@ngx-translate/core';
import { UnsavedChangesComponent } from './unsaved-changes/unsaved-changes.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    ObIconModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(multiTranslateLoader()),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  private readonly config = inject(ObMasterLayoutConfig);

  constructor() {
    this.config.locale.locales = ['en-CH'];
  }
}

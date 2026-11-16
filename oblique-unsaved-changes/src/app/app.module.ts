import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  ObAlertModule,
  ObButtonModule,
  ObMasterLayoutModule,
  ObUnsavedChangesModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import { JsonPipe, registerLocaleData } from "@angular/common";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";
import localeENCH from "@angular/common/locales/en-CH";
import { UnsavedChangesComponent } from "./unsaved-changes/unsaved-changes.component";
import { OtherPageComponent } from "./other-page/other-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { TranslatePipe } from "@ngx-translate/core";

registerLocaleData(localeENCH);

@NgModule({
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
    TranslatePipe,
  ],
  declarations: [AppComponent, UnsavedChangesComponent, OtherPageComponent],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-26"),
        conformity: "none",
        applicationName: "Oblique Unsaved Changes example",
        applicationOperator: "accessibility-statement.address",
        contact: [{ email: "oblique@bit.admin.ch" }],
      },
      translate: { locales: { locales: ["en-CH"] } },
    }),
    { provide: LOCALE_ID, useValue: "en-CH" },
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

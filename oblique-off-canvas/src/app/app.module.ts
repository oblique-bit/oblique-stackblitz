import {LOCALE_ID, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  ObOffCanvasModule,
  provideObliqueConfiguration,
} from "@oblique/oblique";
import {OffCanvasContainerComponent} from "./off-canvas/off-canvas-container.component";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, OffCanvasContainerComponent],
  imports: [
    BrowserModule,
    ObMasterLayoutModule,
    ObOffCanvasModule,
    RouterModule.forRoot([
      {path: "", component: OffCanvasContainerComponent},
    ]),
  ],
  providers: [
    provideObliqueConfiguration({
      accessibilityStatement: {
        createdOn: new Date("2025-09-26"),
        conformity: "none",
        applicationName: "Oblique Off Canvas example",
        applicationOperator:
          "Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern",
        contact: [{email: "oblique@bit.admin.ch"}],
      },
    }),
    {provide: LOCALE_ID, useValue: "de-CH"},
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(config: ObMasterLayoutConfig) {
    config.layout.hasOffCanvas = true;
  }
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {
  ObMasterLayoutModule,
  ObMasterLayoutConfig,
  ObOffCanvasModule,
  provideObliqueConfiguration
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OffCanvasContainerComponent} from './off-canvas/off-canvas-container.component';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, OffCanvasContainerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ObMasterLayoutModule,
    ObOffCanvasModule,
    HttpClientModule,
    TranslateModule,
    RouterModule.forRoot([
      {path: '', component: OffCanvasContainerComponent},
    ]),
  ],
  providers: [
    provideObliqueConfiguration(
      {
        accessibilityStatement:
        {
          applicationName: "Replace me with the application's name",
          applicationOperator: 'Replace me with the name and address of the federal office that exploit this application, HTML is permitted',
          contact: {/* at least 1 email or phone number has to be provided */ emails: [''], phones: ['']},
        },
      }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: ObMasterLayoutConfig) {
    config.layout.hasOffCanvas = true;
  }
}

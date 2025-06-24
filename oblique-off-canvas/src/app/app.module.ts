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
          applicationName: "Oblique Off Canvas example",
          applicationOperator: 'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
          contact: {emails: ['oblique@bit.admin.ch']},
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

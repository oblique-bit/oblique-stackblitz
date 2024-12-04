import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  ObMasterLayoutModule,
  multiTranslateLoader,
  ObIconModule,
  ObMasterLayoutConfig,
  ObOffCanvasModule,
} from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffCanvasContainerComponent } from './off-canvas/off-canvas-container.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, OffCanvasContainerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ObMasterLayoutModule,
    ObOffCanvasModule,
    HttpClientModule,
    ObIconModule.forRoot(),
    TranslateModule.forRoot(multiTranslateLoader()),
    RouterModule.forRoot([
      { path: '', component: OffCanvasContainerComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(config: ObMasterLayoutConfig) {
    config.layout.hasOffCanvas = true;
  }
}

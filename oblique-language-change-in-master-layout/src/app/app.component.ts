import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';
import { ObLanguageService } from '@oblique/oblique';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: 'datepicker-sample', label: 'Datepicker' },
  ];
  constructor(
    adapter: DateAdapter<any>,
		language: ObLanguageService) {
    language.setLocaleOnAdapter(adapter);
  }
}

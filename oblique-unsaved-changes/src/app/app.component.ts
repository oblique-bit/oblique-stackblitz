import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: 'unsaved-changes', label: 'Unsaved changes' },
    { url: 'other-page', label: 'Other page' },
  ];
}

import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [{ url: 'oblique-date-component', label: 'Home' }];
}

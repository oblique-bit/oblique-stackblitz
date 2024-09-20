import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [{ url: 'home', label: 'Home' }];
}

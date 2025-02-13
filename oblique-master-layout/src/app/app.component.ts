import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: 'home', label: 'Home' },
    {
      children: [
        {
          label: 'Sub page',
          url: 'sub1',
        },
      ],
      label: 'With sub nav',
      url: 'menu',
    },
  ];
}

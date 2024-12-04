import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: 'breadcrumb', label: 'breadcrumb' },
    {
      children: [
        {
          label: 'Some Sub page',
          url: 'breadcrumb/some-page/some-sub-page',
        },
      ],
      label: 'Some page',
      url: 'breadcrumb/some-page',
    },
  ];
}

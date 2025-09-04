import { Component } from '@angular/core';
import { ObINavigationLink } from '@oblique/oblique';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [{ url: 'oblique-nav-tree-expand-collapse', label: 'Home' }];
}

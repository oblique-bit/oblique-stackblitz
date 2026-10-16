import {Component} from '@angular/core';
import {type ObINavigationLink, ObMasterLayoutModule} from '@oblique/oblique';

@Component({
    selector: 'app-root',
    imports: [ObMasterLayoutModule],
    templateUrl: './app.html',
})
export class App {
  topNavigation: ObINavigationLink[] = [
    { url: 'oblique-master-layout', label: 'Home' },
  ];
}

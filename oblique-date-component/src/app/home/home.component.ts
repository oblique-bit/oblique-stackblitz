import {Component} from '@angular/core';
import {ObEDateFormats} from '@oblique/oblique';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false
})
export class HomeComponent {
  longDate = ObEDateFormats.LONG_DATE;
  isoDate = ObEDateFormats.ISO_DATE;
  mediumDate = ObEDateFormats.MEDIUM_DATE
  exampleDate = new Date('2025-05-12');
}

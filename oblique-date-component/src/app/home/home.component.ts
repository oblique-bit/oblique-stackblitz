import { Component, signal } from "@angular/core";
import type {ObDateFormat, ObTimeFormat} from '@oblique/oblique';

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  protected readonly timeFormats = signal<ObTimeFormat[]>([
    "shortTime",
    "mediumTime",
    "longTime",
  ]).asReadonly();
  protected readonly dateFormats= signal<ObDateFormat[]>([
    "shortDate",
    "mediumDate",
    "longDate",
    "fullDate",
    "isoDate",
    "longMonthYear",
    "mediumMonthYear",
    "longMonth",
  ]).asReadonly();
  protected readonly isoDate = signal("2025-02-08T13:24:03.256Z").asReadonly();
  protected readonly swissDate = signal("08.02.2025").asReadonly();
  protected readonly dateObject = signal(new Date(this.isoDate())).asReadonly();
  protected readonly timestamp = signal(
    this.dateObject().getTime(),
  ).asReadonly();
}

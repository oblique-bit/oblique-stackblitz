import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HomeComponent {
  exampleDate = new Date("2025-05-12");
}

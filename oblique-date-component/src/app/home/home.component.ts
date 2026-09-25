import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HomeComponent {
  exampleDate = new Date("2025-05-12");
}

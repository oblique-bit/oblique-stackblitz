import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AppComponent {}

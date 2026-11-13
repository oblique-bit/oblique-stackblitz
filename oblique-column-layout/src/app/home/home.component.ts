import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}

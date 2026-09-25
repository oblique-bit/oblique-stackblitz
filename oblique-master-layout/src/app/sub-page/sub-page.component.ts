import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-sub-page",
  standalone: false,
  templateUrl: "./sub-page.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SubPageComponent {}

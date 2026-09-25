import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-other-page",
  templateUrl: "./other-page.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class OtherPageComponent {}

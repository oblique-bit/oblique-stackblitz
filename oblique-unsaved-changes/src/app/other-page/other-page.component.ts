import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-other-page",
  standalone: false,
  templateUrl: "./other-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherPageComponent {}

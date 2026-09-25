import { ChangeDetectionStrategy, Component } from "@angular/core";
import type { ObINavigationLink } from "@oblique/oblique";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: "oblique-nav-tree-disabled", label: "Home" },
  ];
}

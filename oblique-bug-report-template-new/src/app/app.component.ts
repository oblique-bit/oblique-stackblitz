import { Component } from "@angular/core";
import type { ObINavigationLink } from "@oblique/oblique";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  topNavigation: ObINavigationLink[] = [
    { url: "oblique-bug-report-template-new", label: "Bug report" },
  ] as const;
}

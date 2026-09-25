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
    { url: "oblique-bug-report-template-new", label: "Home" },
    {
      children: [
        {
          label: "Sub page",
          url: "sub1",
        },
      ],
      label: "With sub nav",
      url: "menu",
    },
  ];
}

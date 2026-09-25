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
    { url: "oblique-breadcrumb", label: "breadcrumb" },
    {
      children: [
        {
          label: "Some Sub page",
          url: "oblique-breadcrumb/some-page/some-sub-page",
        },
      ],
      label: "Some page",
      url: "oblique-breadcrumb/some-page",
    },
  ];
}

import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ObINavigationLink } from "@oblique/oblique";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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

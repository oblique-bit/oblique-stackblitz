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
    { url: "oblique-master-layout", label: "Home" },
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
    {
      label: "Removable item",
      url: "menu",
      removable: true,
    },
  ];
}

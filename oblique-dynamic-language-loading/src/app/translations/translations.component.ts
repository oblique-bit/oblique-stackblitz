import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-translations",
  templateUrl: "./translations.component.html",
  styleUrls: ["./translations.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TranslationsComponent {
  currentLang = inject(TranslateService).getCurrentLang();
}

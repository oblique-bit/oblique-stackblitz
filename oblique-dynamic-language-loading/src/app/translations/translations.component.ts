import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-translations",
  standalone: false,
  templateUrl: "./translations.component.html",
  styleUrl: "./translations.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TranslationsComponent {
  currentLang = inject(TranslateService).getCurrentLang();
}

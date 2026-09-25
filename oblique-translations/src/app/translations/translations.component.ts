import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-translations",
  standalone: false,
  templateUrl: "./translations.component.html",
  styleUrl: "./translations.component.scss",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TranslationsComponent {
  readonly failedFiles: string = [
    {name: "Failed file name #1"},
    {name: "Failed file name #2"},
    {name: "Failed file name #3"},
  ]
    .map((file) => file.name)
    .join(", ");
  readonly ignoredFiles: string = [
    {name: "Ignored file name #1"},
    {name: "Ignored file name #2"},
    {name: "Ignored file name #3"},
  ]
    .map((file) => file.name)
    .join(", ");
}

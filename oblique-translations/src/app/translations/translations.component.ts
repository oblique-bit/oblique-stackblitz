import { Component } from '@angular/core';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss'],
})
export class TranslationsComponent {
  readonly failedFiles: string = [
    { name: 'Failed file name #1' } as File,
    { name: 'Failed file name #2' } as File,
    { name: 'Failed file name #3' } as File,
  ]
    .map((file) => file.name)
    .join(', ');
  readonly ignoredFiles: string = [
    { name: 'Ignored file name #1' } as File,
    { name: 'Ignored file name #2' } as File,
    { name: 'Ignored file name #3' } as File,
  ]
    .map((file) => file.name)
    .join(', ');
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'datepicker-sample',
  templateUrl: './datepicker-sample.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerSampleComponent {}

import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-unsaved-changes',
    templateUrl: './unsaved-changes.component.html',
    standalone: false
})
export class UnsavedChangesComponent {
  form: UntypedFormGroup;

  private readonly formBuilder = inject(UntypedFormBuilder);

  constructor() {
    this.form = this.formBuilder.group({ field1: null, field2: null });
  }

  save(form: UntypedFormGroup): void {
    form.reset();
  }
}

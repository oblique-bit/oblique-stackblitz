import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UntypedFormBuilder, type UntypedFormGroup } from "@angular/forms";

@Component({
  selector: "app-unsaved-changes",
  standalone: false,
  templateUrl: "./unsaved-changes.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
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

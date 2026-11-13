import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-off-canvas-container",
  standalone: false,
  templateUrl: "./off-canvas-container.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffCanvasContainerComponent {}

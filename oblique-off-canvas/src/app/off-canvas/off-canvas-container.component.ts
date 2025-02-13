import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ObButtonModule,
  ObOffCanvasToggleDirective,
  ObOffCanvasService,
} from '@oblique/oblique';

@Component({
    selector: 'app-off-canvas-container',
    templateUrl: './off-canvas-container.component.html',
    standalone: false
})
export class OffCanvasContainerComponent {}

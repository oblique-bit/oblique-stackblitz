import { Component } from '@angular/core';
import {ObLocalizePipe} from "@oblique/oblique";

@Component({
    selector: 'app-home',
    imports: [ObLocalizePipe],
    templateUrl: './home.html'
  })
export class Home {}

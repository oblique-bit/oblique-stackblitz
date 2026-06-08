
import { Component } from '@angular/core';
import {inject} from '@angular/core';
import {ObMasterLayoutService} from '@oblique/oblique';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent {
    private readonly masterLayoutService = inject(ObMasterLayoutService);
    constructor() {
        this.masterLayoutService.layout.hasLayout = false;
        this.masterLayoutService.footer.isSticky = true;
        this.masterLayoutService.header.isSticky = true;
    }
}

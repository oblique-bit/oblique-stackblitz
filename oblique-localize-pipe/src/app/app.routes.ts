import type {Routes} from '@angular/router';
import {Home} from './home/home';

export const routes: Routes = [
	{path: '', redirectTo: 'oblique-master-layout', pathMatch: 'full'},
	{path: 'oblique-master-layout', component: Home},
];

import { NgModule } from '@angular/core';
import { type Routes, provideRouter } from '@angular/router';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'datepicker-sample', pathMatch: 'full' },
  { path: 'datepicker-sample', component: DatepickerSampleComponent },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

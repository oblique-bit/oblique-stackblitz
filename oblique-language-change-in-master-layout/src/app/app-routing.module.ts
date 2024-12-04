import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'datepicker-sample', pathMatch: 'full' },
  { path: 'datepicker-sample', component: DatepickerSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

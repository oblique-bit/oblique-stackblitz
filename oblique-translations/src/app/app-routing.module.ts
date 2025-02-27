import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationsComponent } from './translations/translations.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TranslationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

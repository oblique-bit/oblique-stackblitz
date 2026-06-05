import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubPageComponent } from './sub-page/sub-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'oblique-master-layout', pathMatch: 'full' },
  { path: 'oblique-master-layout', component: HomeComponent },
  { path: 'menu/sub1', component: SubPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

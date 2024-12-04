import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbSampleComponent } from './breadcrumb-sample/breadcrumb-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'breadcrumb', pathMatch: 'full' },
  {
    path: 'breadcrumb',
    component: BreadcrumbSampleComponent,
    children: [
      {
        path: 'some-page',
        component: BreadcrumbSampleComponent,
        children: [
          {
            path: 'some-sub-page',
            component: BreadcrumbSampleComponent,
            data: { breadcrumb: 'Sub-Page' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

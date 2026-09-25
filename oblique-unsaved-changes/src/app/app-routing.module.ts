import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnsavedChangesComponent } from "./unsaved-changes/unsaved-changes.component";
import { OtherPageComponent } from "./other-page/other-page.component";
import { ObUnsavedChangesGuard } from "@oblique/oblique";

const routes: Routes = [
  { path: "", redirectTo: "unsaved-changes", pathMatch: "full" },
  {
    path: "unsaved-changes",
    component: UnsavedChangesComponent,
    canDeactivate: [ObUnsavedChangesGuard],
  },
  { path: "other-page", component: OtherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

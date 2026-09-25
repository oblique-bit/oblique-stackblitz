import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-date-component", pathMatch: "full" },
  { path: "oblique-date-component", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

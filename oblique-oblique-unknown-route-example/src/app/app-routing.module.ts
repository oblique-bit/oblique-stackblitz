import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-unknown-route-example", pathMatch: "full" },
  { path: "oblique-unknown-route-example", component: HomeComponent },
  { path: "**", redirectTo: "unknown-route" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-unknown-route-example", pathMatch: "full" },
  { path: "oblique-unknown-route-example", component: HomeComponent },
  { path: "**", redirectTo: "unknown-route" },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

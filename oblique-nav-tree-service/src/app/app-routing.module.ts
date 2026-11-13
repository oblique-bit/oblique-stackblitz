import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-nav-tree-service", pathMatch: "full" },
  { path: "oblique-nav-tree-service", component: HomeComponent },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

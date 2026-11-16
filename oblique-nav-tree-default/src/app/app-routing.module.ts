import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-nav-tree-default", pathMatch: "full" },
  { path: "oblique-nav-tree-default", component: HomeComponent },
] as const;

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

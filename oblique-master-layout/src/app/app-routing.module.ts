import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SubPageComponent } from "./sub-page/sub-page.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-master-layout", pathMatch: "full" },
  { path: "oblique-master-layout", component: HomeComponent },
  { path: "menu/sub1", component: SubPageComponent },
] as const;

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

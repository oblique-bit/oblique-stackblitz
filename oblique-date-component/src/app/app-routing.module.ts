import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "oblique-date-component", pathMatch: "full" },
  { path: "oblique-date-component", component: HomeComponent },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

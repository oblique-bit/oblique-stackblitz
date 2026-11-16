import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "oblique-bug-report-template-new",
    pathMatch: "full",
  },
  { path: "oblique-bug-report-template-new", component: HomeComponent },
] as const;

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

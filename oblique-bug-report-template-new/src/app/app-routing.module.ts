import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SubPageComponent } from "./sub-page/sub-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "oblique-bug-report-template-new",
    pathMatch: "full",
  },
  { path: "oblique-bug-report-template-new", component: HomeComponent },
  { path: "menu/sub1", component: SubPageComponent },
];

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

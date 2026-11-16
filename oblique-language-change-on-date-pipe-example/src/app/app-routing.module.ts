import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "oblique-language-change-on-date-pipe-example",
    pathMatch: "full",
  },
  {
    path: "oblique-language-change-on-date-pipe-example",
    component: HomeComponent,
  },
] as const;

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

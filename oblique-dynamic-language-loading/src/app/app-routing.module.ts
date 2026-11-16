import { NgModule } from "@angular/core";
import { type Routes, provideRouter } from "@angular/router";
import { TranslationsComponent } from "./translations/translations.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: TranslationsComponent },
] as const;

@NgModule({
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}

import {provideZonelessChangeDetection} from "@angular/core";
import {platformBrowser} from "@angular/platform-browser";
import {AppModule} from "./app/app.module";

platformBrowser()
  .bootstrapModule(AppModule, {
    applicationProviders: [provideZonelessChangeDetection()],
  })
  .catch((err: unknown) => console.error(err));

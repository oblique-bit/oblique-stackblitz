import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { provideObliqueConfiguration } from "@oblique/oblique";
import { type Observable, delay, firstValueFrom, of } from "rxjs";
import "zone.js";

import { AppModule } from "./app/app.module";
interface DynamicLocales {
  locales: string[];
  defaultLanguage: string;
  disabled: boolean;
}

const loadLocalesFromBackend = (): Observable<DynamicLocales> =>
  of({
    locales: ["de-CH", "en-CH", "es", "fr-CH", "it-CH"],
    defaultLanguage: "de",
    disabled: false,
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  }).pipe(delay(300));

firstValueFrom(loadLocalesFromBackend())
  .then(async (locales) =>
    platformBrowser().bootstrapModule(AppModule, {
      applicationProviders: [
        provideZoneChangeDetection(),
        provideObliqueConfiguration({
          accessibilityStatement: {
            createdOn: new Date("2025-09-26"),
            conformity: "none",
            applicationName: "Oblique Translations example",
            applicationOperator:
              "Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern",
            contact: [{ email: "oblique@bit.admin.ch" }],
          },
          translate: {
            locales,
          },
        }),
      ],
    }),
  )
  .catch((err: unknown) => console.error(err));

import {registerLocaleData} from '@angular/common';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {type ApplicationConfig, LOCALE_ID, provideZonelessChangeDetection} from '@angular/core';
import {provideObliqueConfiguration} from '@oblique/oblique';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {routes} from './app.routes';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		provideRouter(routes),
		provideObliqueConfiguration({
			accessibilityStatement: {
				createdOn: new Date('2025-09-25'),
				conformity: 'none',
				applicationName: 'Oblique Localize pipe example',
				applicationOperator:
					'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
				contact: [{email: 'oblique@bit.admin.ch'}],
			},
			language: {hasLanguageInUrl: true}
		}),
		{provide: LOCALE_ID, useValue: 'de-CH'},
		provideHttpClient(withInterceptorsFromDi()),
	],
};

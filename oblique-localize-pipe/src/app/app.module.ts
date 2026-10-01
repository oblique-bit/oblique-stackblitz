import {LOCALE_ID, NgModule, inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {
	ObMasterLayoutConfig,
	ObMasterLayoutModule,
	ObLocalizePipe,
	provideObliqueConfiguration,
} from '@oblique/oblique';
import {provideTranslateService} from '@ngx-translate/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SubPageComponent} from './sub-page/sub-page.component';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
	declarations: [AppComponent, HomeComponent, SubPageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ObMasterLayoutModule,
		ObLocalizePipe,
	],
	providers: [
		provideTranslateService(),
		provideObliqueConfiguration({
			accessibilityStatement: {
				createdOn: new Date('2025-09-25'),
				conformity: 'none',
				applicationName: 'Oblique Localize pipe example',
				applicationOperator:
					'Federal Office of Information Technology, Systems and Telecommunication FOITT<br>Meielen Campus<br>Eichenweg 3<br>CH-3003 Bern',
				contact: [{email: 'oblique@bit.admin.ch'}],
			},
		}),
		{provide: LOCALE_ID, useValue: 'de-CH'},
		provideHttpClient(withInterceptorsFromDi()),
	],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor() {
		const masterLayoutConfig = inject(ObMasterLayoutConfig);
		masterLayoutConfig.homePageRoute = '/oblique-master-layout';
	}
}
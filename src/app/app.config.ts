import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(),
  ]
};

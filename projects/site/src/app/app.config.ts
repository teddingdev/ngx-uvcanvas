import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideClientHydration()]
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // provideAnimationsAsync(),
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
  ],
};

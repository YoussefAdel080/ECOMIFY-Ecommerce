import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
providers: [
  provideZoneChangeDetection({ eventCoalescing: true })
  , provideRouter(routes),
  provideHttpClient(
    withInterceptors([authInterceptor])
  ),
  provideAnimationsAsync(),
  provideAnimations(),
  provideToastr()
]
};
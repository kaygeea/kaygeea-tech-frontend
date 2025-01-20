import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withDebugTracing, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { TitleStrategyService } from './core/routing/title-strategy.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './utils/interceptors';
import { provideCloudinaryLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
      // withDebugTracing()
    ),
    { 
      provide: TitleStrategy,
      useClass: TitleStrategyService
    },
    provideHttpClient(
      // withInterceptors([loggingInterceptor])
    ),
    provideCloudinaryLoader(`https://res.cloudinary.com`)
  ]
};

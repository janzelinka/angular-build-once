import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import appConfiguration from './environment.json';

declare global {
  interface Window {
    appConfiguration: TAppConfiguration;
  }
}

export type TAppConfiguration = typeof appConfiguration;

fetch('environment.json')
  .then((promise) => {
    return promise.json();
  })
  .then((environment: TAppConfiguration) => {
    if (environment.production) {
      enableProdMode();
    }

    window.appConfiguration = environment;

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err: Error) => console.error(err));
  })
  .catch((error) => {
    console.log(error);
  });

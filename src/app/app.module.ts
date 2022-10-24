import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  EnvironmentConfigurationService,
  environmentConfigurationServiceInitializer,
} from './services/EnvironmentConfigurationService';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: EnvironmentConfigurationService,
      useFactory: environmentConfigurationServiceInitializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

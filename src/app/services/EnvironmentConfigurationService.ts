import { TAppConfiguration } from 'src/main';

export const environmentConfigurationServiceInitializer = () => {
  return new EnvironmentConfigurationService(window.appConfiguration);
};

export class EnvironmentConfigurationService {
  constructor(private config: TAppConfiguration) {}

  public getConfig(): TAppConfiguration {
    return this.config;
  }
}

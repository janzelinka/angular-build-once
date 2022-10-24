import { Component, OnInit } from '@angular/core';
import { EnvironmentConfigurationService } from './services/EnvironmentConfigurationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app2';

  constructor(private configService: EnvironmentConfigurationService) {}

  public ngOnInit(): void {
    debugger;
    console.log(
      `this is my configuration for environment`,
      this.configService.getConfig()
    );
  }
}

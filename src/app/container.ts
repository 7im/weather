import {IWeatherForecast, WeatherData} from './data/weatherData.service';

import './container.scss';

class ContainerController {
  currentTime: Date;
  forecasts: IWeatherForecast[];

  /** @ngInject */
  constructor(private waWeatherDataService: WeatherData) {
    this.updateWeatherForecast();
  }

  private updateWeatherForecast() {
      this.waWeatherDataService.searchByCity('London,UK')
          .then((forecasts: IWeatherForecast[]) => {
            this.forecasts = forecasts;
            this.currentTime = new Date();
          })
          .catch((err) => {
            // TODO: alert user
          });
  }
}

export const container = {
  templateUrl: 'app/container.html',
  controller: ContainerController
};


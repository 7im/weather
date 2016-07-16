import {IWeatherForecast, WeatherData} from '../data/weatherData.service';

import './hourForecast.scss';

class HourForecastController {
  public city: string;
  public currentTime: Date;
  public forecasts: IWeatherForecast[];

  /** @ngInject */
  constructor($scope: ng.IScope, private waWeatherDataService: WeatherData) {
    $scope.$watch('$ctrl.city', (city: string) => this.updateWeatherForecast(city));
  }

  updateWeatherForecast(city: string) {
    if (!city) { return; }
    this.waWeatherDataService.searchByCity(city)
      .then((forecasts: IWeatherForecast[]) => {
        this.forecasts = forecasts;
        this.currentTime = new Date();
      })
      .catch((err) => {
        // todo: alert user
      });
  }
}

export const hourForecast = {
  templateUrl: 'app/components/hourForecast.html',
  controller: HourForecastController
};


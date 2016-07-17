import {IWeatherForecast, WeatherData} from '../data/weatherData.service';
import './hourForecast.scss';

interface IFiveDaysForecast {
  [date: string]: IWeatherForecast[];
}

class HourForecastController {
  public city: string;
  public unit: string;
  public currentTime: Date;
  public forecasts: IFiveDaysForecast;

  /** @ngInject */
  constructor($scope: ng.IScope, private waWeatherDataService: WeatherData) {
    $scope.$watchGroup(['$ctrl.city', '$ctrl.unit'], () => this.updateWeatherForecast());
  }

  updateWeatherForecast() {
    if (!this.city) { return; }
    this.waWeatherDataService.searchByCity(this.city, this.unit)
      .then((forecasts: IFiveDaysForecast) => {
        this.forecasts = forecasts;
        this.currentTime = new Date();
      })
      .catch((err) => {
        // todo: alert user
      });
  }
  displayUnit() {
    const unitMap = {
      metric: 'C',
      imperial: 'F'
    };
    return unitMap[this.unit];
  }
}

export const hourForecast = {
  templateUrl: 'app/components/hourForecast.html',
  controller: HourForecastController
};


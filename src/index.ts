/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

// import {hello} from './app/hello';
import 'angular-ui-router';
import 'angular-fontawesome';
import routesConfig from './routes';
import {container} from './app/container'
import {hourForecast} from './app/components/hourForecast'
import {citySelector} from './app/components/citySelector'
import {WeatherData} from './app/data/weatherData.service'

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router', 'picardy.fontawesome'])
  .config(routesConfig)
  .component('waContainer', container)
  .component('waHourForecast', hourForecast)
  .component('waCitySelector', citySelector)
  .service('waWeatherDataService', WeatherData);

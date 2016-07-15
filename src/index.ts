/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';
import weatherData from './app/data/weatherData.service'

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .service('waWeatherDataService', weatherData);

/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import WeatherData from './weatherData.service';
import {WEATHER_ENDPOINT} from '../constants/weatherDataConfig';

describe('WeatherData service', () => {
  beforeEach(() => {
    angular
      .module('WeatherData', [])
      .service('WeatherData', WeatherData);
    angular.mock.module('WeatherData');
  });

  it('should have these methods', angular.mock.inject((WeatherData: WeatherData) => {
    expect(WeatherData).toHaveMethod('searchByCity');
  }));

  it('searchByCity - should call weather enpoint and return promise', inject((
    WeatherData: WeatherData,
    $httpBackend: ng.IHttpBackendService
  ) => {
    $httpBackend.expect('GET', `${WEATHER_ENDPOINT}&q=city`);
    WeatherData.searchByCity('city');
    $httpBackend.flush();
  }));
});

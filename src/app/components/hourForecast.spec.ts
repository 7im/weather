/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {hourForecast} from './hourForecast';
// import {IWeatherForecast} from '../data/weatherData.service'

describe('hourForecast component', () => {
  const defaultCity: string = 'default';
  const mockRestult = {};
  class MockWaWeatherDataService {
    searchByCity(city: string) { return; }
  }

  beforeEach(() => {
    angular
      .module('hourForecast', ['app/components/hourForecast.html'])
      .service('waWeatherDataService', MockWaWeatherDataService)
      .component('hourForecast', hourForecast);
    angular.mock.module('hourForecast');
  });

  beforeEach(inject((
     $q: ng.IQService,
     $rootScope: ng.IRootScopeService,
     $componentController: ng.IControllerService,
     waWeatherDataService: MockWaWeatherDataService
  ) => {
    this.mockSearchByCity = spyOn(waWeatherDataService, 'searchByCity')
      .and.returnValue($q.resolve(mockRestult));
    this.component = $componentController('hourForecast', {}, {city: defaultCity});
    $rootScope.$digest();
    this.$rootScope = $rootScope;
  }));

  it('should inject weather data service and call search by city method', () => {
    expect(this.mockSearchByCity).toHaveBeenCalledWith(defaultCity, undefined);
  });

  it('should have updateWeatherForecast method to reload from source', () => {
    expect(this.mockSearchByCity.calls.count()).toBe(1);
    this.component.updateWeatherForecast();
    expect(this.mockSearchByCity.calls.count()).toBe(2);
  });

  it('should populate ctrl with weather value', () => {
    expect(this.component.forecasts).toBe(mockRestult);
    expect(this.component.currentTime).toBeDate();
  });
});

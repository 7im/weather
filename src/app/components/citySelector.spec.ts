/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {citySelector} from './citySelector';
import {CITIES} from '../constants/cities';

interface ICitySelector {
  city: string;
  availableCities: string[];
}

describe('citySelector component', () => {
  beforeEach(() => {
    angular
      .module('citySelector', ['app/components/citySelector.html'])
      .component('citySelector', citySelector);
    angular.mock.module('citySelector');
  });

  it('should...', angular.mock.inject(($rootScope: {city} & ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<city-selector city="city"></city-selector>')($rootScope);
    $rootScope.$digest();
    expect(element.find('option').length).toBe(CITIES.length);
  }));
  it('should...', angular.mock.inject(($componentController: ng.IControllerService) => {
    const component = $componentController<ICitySelector>('citySelector', {});
    expect(component.city).toBe(CITIES[0]);
    expect(component.availableCities).toBe(CITIES);
  }));
});

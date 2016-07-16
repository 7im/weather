/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {unitSwitch} from './unitSwitch';

describe('unitSwitch component', () => {
  beforeEach(() => {
    angular
      .module('unitSwitch', ['app/components/unitSwitch.html'])
      .component('unitSwitch', unitSwitch);
    angular.mock.module('unitSwitch');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<unitSwitch></unitSwitch>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

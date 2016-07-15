/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {container} from './container';

describe('container component', () => {
  beforeEach(() => {
    angular
      .module('container', ['app/container.html'])
      .component('container', container);
    angular.mock.module('container');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    // const element = $compile('<container></container>')($rootScope);
    // $rootScope.$digest();
    // expect(element).not.toBeNull();
  }));
});

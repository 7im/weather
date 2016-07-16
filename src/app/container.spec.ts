/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {container} from './container';

describe('container component', () => {

  beforeEach(() => {
    angular.module('container', ['app/container.html'])
      .component('container', container);
    angular.mock.module('container');
  });

  it('should render container', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<container></container>')($rootScope);
    $rootScope.$digest();
    const h2 = element.find('h2');
    expect(h2.html()).toEqual('Weather forecast');
  }));
});

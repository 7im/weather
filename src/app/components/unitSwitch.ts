import {UNITS} from '../constants/weatherDataConfig';
import {map, capitalize} from 'lodash';

interface IUnit {
  value: string;
  label: string;
}

class UnitSwitchController {
  public units: IUnit[];
  public unit: string;

  constructor() {
    this.units = map(UNITS, (unit: string) => {
      return {
        value: unit,
        label: capitalize(unit)
      };
    });
    this.unit = this.units[0].value;
  }
}

export const unitSwitch = {
  templateUrl: 'app/components/unitSwitch.html',
  controller: UnitSwitchController,
  bindings: {
    unit: '='
  }
};


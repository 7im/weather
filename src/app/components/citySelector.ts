import {CITIES} from '../constants/cities';

class CitySelectorController {
  public availableCities: string[];
  public city: string;

  constructor() {
    this.availableCities = CITIES;
    this.city = this.availableCities[0];
  }
}

export const citySelector = {
  templateUrl: 'app/components/citySelector.html',
  controller: CitySelectorController,
  bindings: {
    city: '='
  }
};


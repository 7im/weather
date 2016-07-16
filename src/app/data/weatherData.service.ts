/// <reference path="../../../typings/index.d.ts" />

import {WEATHER_ENDPOINT, UNITS} from '../constants/weatherDataConfig';
import {map} from 'lodash';

export interface IWeatherForecast {
    temp: number;
    temp_min: number;
    temp_max: number;
    weather: {
        main: string;
        description: string;
        icon: string;
    };
    time: Date;
}

export class WeatherData {
    /** @ngInject */
    constructor(private $http: ng.IHttpService) {}

    searchByCity(city: string, unit?: string) {
        var endpoint = `${WEATHER_ENDPOINT}&units=${unit || UNITS[0]}&q=${city}`;
        return this.$http.get(endpoint).then((res: any) => {
            return res.data && map(res.data.list, (forecast: any) => {
                return {
                    temp: forecast.main.temp,
                    temp_min: forecast.main.temp_min,
                    temp_max: forecast.main.temp_max,
                    pressure: forecast.main.pressure,
                    humidity: forecast.main.humidity,
                    weather: {
                        main: forecast.weather[0].main,
                        description: forecast.weather[0].description,
                        icon: forecast.weather[0].icon
                    },
                    time: new Date(forecast.dt_txt)
                } as IWeatherForecast;
            });
        });
    }
}

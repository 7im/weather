import {WEATHER_ENDPOINT} from '../constants/weatherDataConfig';

class WeatherData {
    constructor(private $http: ng.IHttpService) {
        // code...
    }
    searchByCity(city: string) {
        var endpoint = `${WEATHER_ENDPOINT}&q=${city}`;
        return this.$http.get(endpoint).then((res) => {
            console.log(res);
            return res.data;
        });
    }
}

export default WeatherData;

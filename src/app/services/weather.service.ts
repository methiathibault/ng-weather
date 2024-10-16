import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { Router } from "@angular/router";
import { API } from "../api_response";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    httpclient = inject(HttpClient);
    router= inject(Router);

    cityList: City[]
    constructor() {
        this.cityList = CITYLIST
    }

    getWeatherFromId(city_id: string) {
        return this.httpclient.get(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${environment.apiKey}&units=metric`);
    }

    getIdFromCityName(city_name: string): number | null {
        city_name = city_name.toLowerCase();
        let city = this.cityList.find(city => city.name.toLowerCase() === city_name);
        if (city) {
            return city.id;
        }
        console.error(`City not found for ${city_name}`);
        return null;
    }
    
    getWeatherFromCityName(city_name: string): any | null {
        let id = this.getIdFromCityName(city_name);
        if (id) {
            return this.getWeatherFromId(id.toString());

        }
        console.error(`City not found for ${city_name}`);
        return null;
    }

    goToWeatherDetail(city: API) {
        this.router.navigate(['/weather', city.name]);
    }

    goToWeatherGroup() {
        this.router.navigate(['/weather-group']);
    }

    goToWeather() {
        this.router.navigate(['/weather']);
    }

}
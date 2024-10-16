import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    constructor() {}

    getWeather(city_id: string) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=${environment.apiKey}`)
            .then((response) => response.json())
            .then((data) => data);
        }
    
    }
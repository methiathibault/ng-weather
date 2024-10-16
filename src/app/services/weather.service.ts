import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    constructor() {}

    getWeather(city_id: string) {
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=${environment.apiKey}`)
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=${environment.apiKey}`)
            .then((response) => {
                response.json()
                console.log(response.json())
            })
            .then((data) =>{
                data
                console.log(data)
            } );
        }
    
    }
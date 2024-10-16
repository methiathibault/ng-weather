import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { Router } from "@angular/router";
import { API } from "../api_response";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    cityList: City[]

    httpclient = inject(HttpClient);
    router= inject(Router);
    constructor() {
        this.cityList = CITYLIST
    }

    getWeatherFromId(city_id: string): Observable<any> {
        return this.httpclient.get(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&lang=fr&appid=${environment.apiKey}&units=metric`);
    }

    getIdFromCityName(city_name: string): number | undefined {
        const city = this.cityList.find(city => city.name.toLowerCase() === city_name.toLowerCase());
        if (city) {
            return city.id;
        }
        console.error(`City not found for ${city_name}`);
        return undefined;
    }
    
    getWeatherFromCityName(city_name: string): Observable<any> {
    const id = this.getIdFromCityName(city_name);
    if (id) {
        return this.getWeatherFromId(id.toString()).pipe(
            catchError((error: any) => {
                console.error(error);
                return of(null);
            })
        );
    }
    console.error(`City not found for ${city_name}`);
    return of(null);
    }

    goToWeatherDetail(city: API): void {
        this.router.navigate(['/weather', city.name]);
    }

    goToWeatherGroup(): void {
        this.router.navigate(['/weather-group']);
    }

    goToWeather(): void {
        this.router.navigate(['/weather']);
    }

    goToPageNotFound(): void {
        this.router.navigate(['**']);
    }
}
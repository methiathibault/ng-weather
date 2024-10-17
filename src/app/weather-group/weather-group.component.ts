import { Component, OnInit , inject } from "@angular/core";
import { CITYLIST } from "../city-mock";
import { City } from "../city";
import { HttpClient } from '@angular/common/http';
import { WeatherService } from "../services/weather.service";
import { environment } from "../../environments/environment";
import { API } from "../api_response";


@Component({
    selector: 'app-weather-group',
    templateUrl: './weather-group.component.html',
})

export class WeatherGroupComponent implements OnInit {
    constructor() {}
    id: number= 0
    cityList: City[] = CITYLIST
    actualCityList: City[] = []
    data:any
    listeData: API[] = []

    private http = inject(HttpClient);
    weatherService = inject(WeatherService);
    max_id: number = (Math.round(this.cityList.length/5) -1)

    ngOnInit() {
        this.getWeather(this.id)
    }


    getWeather(id: number) {
        this.listeData = []
        this.id = id
        console.log(this.id)
        console.log(this.max_id)
        for (let i = this.id*5; i < (this.id*5)+5; i++) {
            
            console.log(this.cityList[i].name)
           this.getWeatherAPI(this.cityList[i].name)
        }
    }

    getWeatherAPI(cityname: string)  {
        this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&lang=fr&appid=${environment.apiKey}&units=metric`)
            .subscribe((data: Object) => {
                const apiData = data as API
                this.listeData.push(apiData)
            })
    }
}
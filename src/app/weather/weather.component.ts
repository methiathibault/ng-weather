import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { API } from "../api_response";

@Component({
    standalone: true,
    selector: 'app-weather',
    imports: [RouterModule],
    templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
    city: API = {} as API;
    cityList: City[] = [];
    cityForm: FormGroup = {} as FormGroup;

    router = inject(Router);
    formBuilder = inject(FormBuilder);
    service = inject(WeatherService);

    constructor() {}

    ngOnInit(): void {
        this.cityList = CITYLIST;
        this.cityForm = this.formBuilder.group({
            city: ['', Validators.required],
        });
        this.getWeather('Paris');
    }

    getWeather(city_name: string) {
        this.service.getWeatherFromCityName(city_name).subscribe((data: API) => {
            console.log(data);
            this.city = data;
        }, (error: any) => { console.error(error); });
    }

}
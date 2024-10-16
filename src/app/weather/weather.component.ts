import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { API } from "../api_response";

@Component({
    standalone: true,
    selector: 'app-weather',
    imports: [RouterModule, ReactiveFormsModule],
    templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
    city: API | undefined;
    cityList: City[];
    cityForm: FormGroup;

    router = inject(Router);
    formBuilder = inject(FormBuilder);
    service = inject(WeatherService);

    constructor() {
        this.cityList = CITYLIST;
        this.cityForm = this.formBuilder.group({
            city: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.getWeather('Paris');
    }

    getWeather(city_name: string) {
        this.service.getWeatherFromCityName(city_name).subscribe((data: API) => {
            console.log(data);
            this.city = data;
        }, (error: any) => { console.error(error); });
    }

    onSubmit() {
        if (this.cityForm.valid) {
            this.getWeather(this.cityForm.value.city);
        }
    }
}
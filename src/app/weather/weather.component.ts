import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { API } from "../api_response";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-weather',
    imports: [RouterModule, ReactiveFormsModule, CommonModule],
    templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
    city: API | undefined;
    cityList: City[];
    cityForm: FormGroup;
    errorMessage: string | undefined;

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

    getWeather(city_name: string): void {
        this.service.getWeatherFromCityName(city_name).subscribe((data: API) => {
            if (!data) {
                this.errorMessage = 'City not found. Please try again';
                return;
            }
            console.log(data);
            this.city = data;
            this.errorMessage = undefined;
        }, (error: any) => { 
            console.error(error);
            this.errorMessage = 'An error occurred. Please try again';
        });
    }

    onSubmit(): void {
        if (this.cityForm.valid) {
            this.getWeather(this.cityForm.value.city);
            this.cityForm.reset();
        }
    }
}
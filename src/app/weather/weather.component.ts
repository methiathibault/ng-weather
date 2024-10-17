import { Component, inject, OnInit } from "@angular/core";
import { City } from "../city";
import { CITYLIST } from "../city-mock";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { WeatherService } from "../services/weather.service";
import { API } from "../api_response";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-weather',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
    city: API | undefined;
    cityList: City[];
    cityForm: FormGroup;
    errorMessage: string | undefined;

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
                this.errorMessage = 'Ville introuvable, veuillez réessayer';
                return;
            }
            this.city = data;
            this.errorMessage = undefined;
        }, (error: any) => { 
            console.error(error);
            this.errorMessage = 'Erreur lors de la récupération des données';
        });
    }

    onSubmit(): void {
        if (this.cityForm.valid) {
            this.getWeather(this.cityForm.value.city);
            this.cityForm.reset();
        }
    }
}
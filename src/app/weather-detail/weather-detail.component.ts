import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { API } from "../api_response";
import { WeatherService } from "../services/weather.service";

@Component({
    standalone: true,
    selector: 'app-weather-detail',
    imports: [RouterModule],
    templateUrl: './weather-detail.component.html',
})

export class WeatherDetailComponent implements OnInit {
    city: API | undefined;

    router = inject(ActivatedRoute);
    service = inject(WeatherService);
    constructor() {}

    ngOnInit(): void {
        const city_name: string | null = this.router.snapshot.paramMap.get('city')
        if (city_name) {
            this.service.getWeatherFromCityName(city_name).subscribe((data: API) => {
                console.log(data);
                this.city = data;
            }, (error: any) => 
                { console.error(error); });
        }
    }
}
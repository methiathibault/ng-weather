import { Component, inject, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { List, Prevision } from "../api_response";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-weather-prevision",
    templateUrl: "./weather-prevision.component.html",
})

export class WeatherPrevisionComponent implements OnInit {
    prevision: Prevision | undefined;
    filteredPrevision: List[] | undefined;

    router = inject(ActivatedRoute)
    service = inject(WeatherService)
    constructor() {}

    ngOnInit(): void {
        const city_name: string | null = this.router.snapshot.paramMap.get('city')
        if (city_name) {
            this.service.getDailyWeatherFromCityName(city_name).subscribe((data: Prevision) => {
                console.log(data);
                this.prevision = data;
                this.filterPrevision();
            }, (error: any) => {
                console.error(error);
            });
        }
    }

    filterPrevision(): void {
        if (this.prevision) {
            const filtered = this.prevision.list.filter((item: any) => {
                const date = new Date(item.dt_txt);
                return date.getHours() === 12
            });
            this.filteredPrevision = filtered;
        }
    }
}
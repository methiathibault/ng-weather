import { Component, inject, OnChanges, SimpleChanges } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { API } from "../api_response";

@Component({
    standalone: true,
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
})

export class FavoriteComponent implements OnChanges {
    cities: API[];
    
    service = inject(WeatherService);
    constructor() {
        this.cities = this.service.getFavoriteCities();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['cities']) {
            this.cities = this.service.getFavoriteCities()
        }
    }

    removeFromFavorite(event: Event, city: API): void{
        event.stopPropagation()
        this.service.removeFromFavoriteCities(city);
        this.cities = this.service.getFavoriteCities()
    }
}